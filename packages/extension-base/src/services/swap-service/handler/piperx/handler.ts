// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0

import { SwapError } from '@subwallet/extension-base/background/errors/SwapError';
import { TransactionError } from '@subwallet/extension-base/background/errors/TransactionError';
import { ChainType, ExtrinsicType } from '@subwallet/extension-base/background/KoniTypes';
import { BalanceService } from '@subwallet/extension-base/services/balance-service';
import { ChainService } from '@subwallet/extension-base/services/chain-service';
import { _getChainNativeTokenSlug, _getContractAddressOfToken, _isNativeToken } from '@subwallet/extension-base/services/chain-service/utils';
import { BaseStepDetail, BasicTxErrorType, CommonFeeComponent, CommonOptimalPath, CommonStepFeeInfo, CommonStepType, OptimalSwapPathParams, SwapBaseTxData, SwapEarlyValidation, SwapErrorType, SwapFeeType, SwapProviderId, SwapQuote, SwapRequest, SwapStepType, SwapSubmitParams, SwapSubmitStepData, ValidateSwapProcessParams } from '@subwallet/extension-base/types';

import { calculateSwapRate, SWAP_QUOTE_TIMEOUT_MAP } from '../../utils';
import { SwapBaseHandler, SwapBaseInterface } from '../base-handler';
import { WIP_ADDRESS } from './constant';
import { v2GetPrice, v2RoutingExactInput, v2Swap } from './core';
import BigNumber from "bignumber.js";

export class PiperXSwapHandler implements SwapBaseInterface {
  private swapBaseHandler: SwapBaseHandler;
  providerSlug: SwapProviderId;

  constructor (chainService: ChainService, balanceService: BalanceService) {
    this.swapBaseHandler = new SwapBaseHandler({
      chainService,
      balanceService,
      providerName: 'PiperX',
      providerSlug: SwapProviderId.PIPERX
    });
    this.providerSlug = SwapProviderId.PIPERX;
  }

  // todo
  validateSwapRequest: (request: SwapRequest) => Promise<SwapEarlyValidation>;

  get chainService () {
    return this.swapBaseHandler.chainService;
  }

  get balanceService () {
    return this.swapBaseHandler.balanceService;
  }

  get providerInfo () {
    return this.swapBaseHandler.providerInfo;
  }

  get name () {
    return this.swapBaseHandler.name;
  }

  get slug () {
    return this.swapBaseHandler.slug;
  }

  async getSwapQuote (request: SwapRequest): Promise<SwapQuote | SwapError> {
    const fromAsset = this.chainService.getAssetBySlug(request.pair.from);
    const toAsset = this.chainService.getAssetBySlug(request.pair.to);
    const fromChain = this.chainService.getChainInfoByKey(fromAsset.originChain);
    const fromChainNativeTokenSlug = _getChainNativeTokenSlug(fromChain);
    const evmApi = this.chainService.getEvmApi(fromAsset.originChain);

    const fromContract = _getContractAddressOfToken(fromAsset) || WIP_ADDRESS;
    const toContract = _getContractAddressOfToken(toAsset) || WIP_ADDRESS;

    const bnFromAmount = new BigNumber(request.fromAmount);

    const defaultFeeToken = _isNativeToken(fromAsset) ? fromAsset.slug : fromChainNativeTokenSlug;
    const v2Price = await v2GetPrice(fromContract, toContract, evmApi);
    const bnToAmount = bnFromAmount.multipliedBy(v2Price).decimalPlaces(0);
    const v2Router = await v2RoutingExactInput(fromContract, toContract, BigInt(request.fromAmount), evmApi);

    const networkFee: CommonFeeComponent = {
      tokenSlug: fromChainNativeTokenSlug,
      amount: '1', // todo
      feeType: SwapFeeType.NETWORK_FEE
    };

    try {
      return {
        pair: request.pair,
        fromAmount: request.fromAmount,
        toAmount: bnToAmount.toString(),
        rate: calculateSwapRate(request.fromAmount, bnToAmount.toString(), fromAsset, toAsset),
        provider: this.providerInfo,
        aliveUntil: +Date.now() + (SWAP_QUOTE_TIMEOUT_MAP[this.slug] || SWAP_QUOTE_TIMEOUT_MAP.default),
        feeInfo: {
          feeComponent: [networkFee],
          defaultFeeToken,
          feeOptions: [defaultFeeToken]
        },
        metadata: v2Router.bestRoute,
        route: {
          path: [fromAsset.slug, toAsset.slug]
        }
      } as SwapQuote;
    } catch (e) {
      return new SwapError(SwapErrorType.ERROR_FETCHING_QUOTE);
    }
  }

  generateOptimalProcess (params: OptimalSwapPathParams): Promise<CommonOptimalPath> {
    return this.swapBaseHandler.generateOptimalProcess(params, [
      this.getSubmitStep
    ]);
  }

  async getSubmitStep (params: OptimalSwapPathParams): Promise<[BaseStepDetail, CommonStepFeeInfo] | undefined> {
    if (params.selectedQuote) {
      const submitStep = {
        name: 'Swap',
        type: SwapStepType.SWAP
      };

      return Promise.resolve([submitStep, params.selectedQuote.feeInfo]);
    }

    return Promise.resolve(undefined);
  }

  public async validateSwapProcess (params: ValidateSwapProcessParams): Promise<TransactionError[]> {
    const amount = params.selectedQuote.fromAmount;
    const bnAmount = BigInt(amount);

    if (bnAmount <= BigInt(0)) {
      return Promise.resolve([new TransactionError(BasicTxErrorType.INVALID_PARAMS, 'Amount must be greater than 0')]);
    }

    let isXcmOk = false;

    for (const [index, step] of params.process.steps.entries()) {
      const getErrors = async (): Promise<TransactionError[]> => {
        switch (step.type) {
          case CommonStepType.DEFAULT:
            return Promise.resolve([]);
          case CommonStepType.TOKEN_APPROVAL:
            return Promise.reject(new TransactionError(BasicTxErrorType.UNSUPPORTED));
          default:
            return this.swapBaseHandler.validateSwapStep(params, isXcmOk, index);
        }
      };

      const errors = await getErrors();

      if (errors.length) {
        return errors;
      } else if (step.type === CommonStepType.XCM) {
        isXcmOk = true;
      }
    }

    return [];
  }

  public async handleSwapProcess (params: SwapSubmitParams): Promise<SwapSubmitStepData> {
    const { currentStep, process } = params;
    const type = process.steps[currentStep].type;

    switch (type) {
      case CommonStepType.DEFAULT:
        return Promise.reject(new TransactionError(BasicTxErrorType.UNSUPPORTED));
      case SwapStepType.SWAP:
        return this.handleSubmitStep(params);
      default:
        return this.handleSubmitStep(params);
    }
  }

  public async handleSubmitStep (params: SwapSubmitParams): Promise<SwapSubmitStepData> {
    const fromAsset = this.chainService.getAssetBySlug(params.quote.pair.from);
    const evmApi = this.chainService.getEvmApi(fromAsset.originChain);

    const txData: SwapBaseTxData = {
      address: params.address,
      provider: this.providerInfo,
      quote: params.quote,
      slippage: params.slippage,
      recipient: params.recipient,
      process: params.process
    };
    const fromAmount = BigInt(params.quote.fromAmount);
    const toAmount = params.quote.toAmount;
    const scaleFactor = 1e18;
    const toAmountScaled = Math.floor(Number(toAmount) * scaleFactor);
    const toAmountBigInt = BigInt(toAmountScaled);

    const slippageBigInt = BigInt(Math.floor(params.slippage * 10000));
    const minReceive = (toAmountBigInt * (10000n - slippageBigInt)) / (10000n * BigInt(scaleFactor));

    const extrinsic = await v2Swap(fromAmount, minReceive, params.quote.metadata as string[], params.address, BigInt(3000000000), evmApi);

    return {
      txChain: fromAsset.originChain,
      txData,
      extrinsic: extrinsic,
      transferNativeAmount: _isNativeToken(fromAsset) ? params.quote.fromAmount : '0',
      extrinsicType: ExtrinsicType.SWAP,
      chainType: ChainType.EVM
    } as SwapSubmitStepData;
  }
}
