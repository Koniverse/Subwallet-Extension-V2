// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0

import { _ChainAsset, _ChainInfo } from '@subwallet/chain-list/types';
import { AmountData } from '@subwallet/extension-base/background/KoniTypes';
import { XCM_FEE_RATIO } from '@subwallet/extension-base/constants';
import { _isSnowBridgeXcm } from '@subwallet/extension-base/core/substrate/xcm-parser';
import { getERC20TransactionObject, getEVMTransactionObject } from '@subwallet/extension-base/services/balance-service/transfer/smart-contract';
import { createTransferExtrinsic } from '@subwallet/extension-base/services/balance-service/transfer/token';
import { createTonTransaction } from '@subwallet/extension-base/services/balance-service/transfer/ton-transfer';
import { createAvailBridgeExtrinsicFromAvail, createAvailBridgeTxFromEth, createPolygonBridgeExtrinsic, createSnowBridgeExtrinsic, createXcmExtrinsic, CreateXcmExtrinsicProps, FunctionCreateXcmExtrinsic } from '@subwallet/extension-base/services/balance-service/transfer/xcm';
import { isAvailChainBridge } from '@subwallet/extension-base/services/balance-service/transfer/xcm/availBridge';
import { _isPolygonChainBridge } from '@subwallet/extension-base/services/balance-service/transfer/xcm/polygonBridge';
import { _isPosChainBridge } from '@subwallet/extension-base/services/balance-service/transfer/xcm/posBridge';
import { _EvmApi, _SubstrateApi, _TonApi } from '@subwallet/extension-base/services/chain-service/types';
import { _getContractAddressOfToken, _isChainEvmCompatible, _isChainTonCompatible, _isLocalToken, _isNativeToken, _isPureEvmChain, _isTokenEvmSmartContract, _isTokenTransferredByEvm, _isTokenTransferredByTon } from '@subwallet/extension-base/services/chain-service/utils';
import { isTonTransaction } from '@subwallet/extension-base/services/transaction-service/helpers';
import { ValidateTransactionResponseInput } from '@subwallet/extension-base/services/transaction-service/types';
import { EvmEIP1559FeeOption, FeeChainType, FeeDetail, FeeInfo, SubstrateTipInfo, TransactionFee } from '@subwallet/extension-base/types';
import { ResponseSubscribeTransfer } from '@subwallet/extension-base/types/balance/transfer';
import { BN_ZERO } from '@subwallet/extension-base/utils';
import { isTonAddress } from '@subwallet/keyring';
import BigN from 'bignumber.js';
import { TransactionConfig } from 'web3-core';

import { SubmittableExtrinsic } from '@polkadot/api/types';
import { u8aToHex } from '@polkadot/util';
import { addressToEvm, isEthereumAddress } from '@polkadot/util-crypto';

import { combineEthFee, combineSubstrateFee } from './combine';

export interface CalculateMaxTransferable extends TransactionFee {
  address: string;
  srcToken: _ChainAsset;
  destToken?: _ChainAsset;
  srcChain: _ChainInfo;
  destChain: _ChainInfo;
  substrateApi: _SubstrateApi;
  evmApi: _EvmApi;
  tonApi: _TonApi;
  recalculateMaxTransferableSpecialCase: (transferInfo: ResponseSubscribeTransfer) => Promise<ResponseSubscribeTransfer>;
}

export const detectTransferTxType = (srcToken: _ChainAsset, srcChain: _ChainInfo, destChain: _ChainInfo): FeeChainType => {
  const isXcmTransfer = srcChain.slug !== destChain.slug;

  if (isXcmTransfer) {
    const isAvailBridgeFromEvm = _isPureEvmChain(srcChain) && isAvailChainBridge(destChain.slug);
    const isSnowBridgeEvmTransfer = _isPureEvmChain(srcChain) && _isSnowBridgeXcm(srcChain, destChain) && !isAvailBridgeFromEvm;
    const isPolygonBridgeTransfer = _isPolygonChainBridge(srcChain.slug, destChain.slug);
    const isPosBridgeTransfer = _isPosChainBridge(srcChain.slug, destChain.slug);

    return (isAvailBridgeFromEvm || isSnowBridgeEvmTransfer || isPolygonBridgeTransfer || isPosBridgeTransfer) ? 'evm' : 'substrate';
  } else {
    if (_isChainEvmCompatible(srcChain) && _isTokenTransferredByEvm(srcToken)) {
      return 'evm';
    } else if (_isChainTonCompatible(srcChain) && _isTokenTransferredByTon(srcToken)) {
      return 'ton';
    } else {
      return 'substrate';
    }
  }
};

export const calculateMaxTransferable = async (id: string, request: CalculateMaxTransferable, freeBalance: AmountData, fee: FeeInfo): Promise<ResponseSubscribeTransfer> => {
  const { destChain, recalculateMaxTransferableSpecialCase, srcChain } = request;
  const isXcmTransfer = srcChain.slug !== destChain.slug;

  let maxTransferableAmount: ResponseSubscribeTransfer;

  if (isXcmTransfer) {
    maxTransferableAmount = await calculateXCMMaxTransferable(id, request, freeBalance, fee);
  } else {
    maxTransferableAmount = await calculateTransferMaxTransferable(id, request, freeBalance, fee);
  }

  return recalculateMaxTransferableSpecialCase(maxTransferableAmount);
};

export const calculateTransferMaxTransferable = async (id: string, request: CalculateMaxTransferable, freeBalance: AmountData, fee: FeeInfo): Promise<ResponseSubscribeTransfer> => {
  const { address, destChain, evmApi, feeCustom, feeOption, srcChain, srcToken, substrateApi, tonApi } = request;
  const feeChainType = fee.type;
  let estimatedFee: string;
  let feeOptions: FeeDetail;
  let maxTransferable = new BigN(freeBalance.value);

  const fakeAddress = '5DRewsYzhJqZXU3SRaWy1FSt5iDr875ao91aw5fjrJmDG4Ap'; // todo: move this
  const substrateAddress = fakeAddress; // todo: move this
  const evmAddress = u8aToHex(addressToEvm(fakeAddress)); // todo: move this

  const recipient = _isChainEvmCompatible(destChain) ? evmAddress : substrateAddress;

  try {
    let transaction: ValidateTransactionResponseInput['transaction'];

    if (isEthereumAddress(address) && isEthereumAddress(recipient) && _isTokenTransferredByEvm(srcToken)) {
      // todo: refactor: merge getERC20TransactionObject & getEVMTransactionObject
      // Estimate with EVM API
      if (_isTokenEvmSmartContract(srcToken) || _isLocalToken(srcToken)) {
        [transaction] = await getERC20TransactionObject({
          assetAddress: _getContractAddressOfToken(srcToken),
          chain: srcChain.slug,
          evmApi,
          feeCustom,
          feeInfo: fee,
          feeOption,
          from: address,
          to: recipient,
          transferAll: false,
          value: '0'
        });
      } else {
        [transaction] = await getEVMTransactionObject({
          chain: srcChain.slug,
          evmApi,
          feeCustom,
          feeInfo: fee,
          feeOption,
          from: address,
          to: recipient,
          transferAll: false,
          value: '0'
        });
      }
    } else if (isTonAddress(address) && _isTokenTransferredByTon(srcToken)) {
      [transaction] = await createTonTransaction({
        tokenInfo: srcToken,
        from: address,
        to: address,
        networkKey: srcChain.slug,
        value: '0',
        transferAll: false, // currently not used
        tonApi
      });
    } else {
      [transaction] = await createTransferExtrinsic({
        transferAll: false,
        value: '0',
        from: address,
        networkKey: srcChain.slug,
        tokenInfo: srcToken,
        to: recipient,
        substrateApi
      });
    }

    if (feeChainType === 'evm') {
      // Calculate fee for evm transaction
      const tx = transaction as TransactionConfig;

      const gasLimit = tx.gas?.toString() || (await evmApi.api.eth.estimateGas(tx)).toString();

      const _feeCustom = feeCustom as EvmEIP1559FeeOption;
      const combineFee = combineEthFee(fee, feeOption, _feeCustom);

      if (combineFee.maxFeePerGas) {
        estimatedFee = new BigN(combineFee.maxFeePerGas).multipliedBy(gasLimit).toFixed(0);
      } else {
        estimatedFee = new BigN(combineFee.gasPrice || '0').multipliedBy(gasLimit).toFixed(0);
      }

      feeOptions = {
        ...fee,
        estimatedFee,
        gasLimit: gasLimit.toString()
      };
    } else if (feeChainType === 'substrate') {
      // Calculate fee for substrate transaction
      try {
        const mockTx = transaction as SubmittableExtrinsic<'promise'>;
        const paymentInfo = await mockTx.paymentInfo(address);

        estimatedFee = paymentInfo?.partialFee?.toString() || '0';
      } catch (e) {
        estimatedFee = '0';
      }

      const _feeCustom = feeCustom as SubstrateTipInfo;

      const tip = combineSubstrateFee(fee, feeOption, _feeCustom).tip;

      estimatedFee = new BigN(estimatedFee).plus(tip).toFixed(0);

      feeOptions = {
        ...fee,
        estimatedFee
      };
    } else {
      if (transaction && (isTonTransaction(transaction))) {
        estimatedFee = transaction.estimateFee;
        feeOptions = {
          ...fee,
          estimatedFee: estimatedFee
        };
      } else {
        // Not implemented yet
        estimatedFee = '0';
        feeOptions = {
          ...fee,
          estimatedFee: '0'
        };
      }
    }
  } catch (e) {
    estimatedFee = '0';

    if (fee.type === 'evm') {
      feeOptions = {
        ...fee,
        estimatedFee,
        gasLimit: '0'
      };
    } else {
      feeOptions = {
        ...fee,
        estimatedFee
      };
    }

    console.warn('Unable to estimate fee', e);
  }

  maxTransferable = maxTransferable
    .minus(new BigN(estimatedFee));

  return {
    maxTransferable: !_isNativeToken(srcToken)
      ? freeBalance.value
      : maxTransferable.gt(BN_ZERO) ? (maxTransferable.toFixed(0) || '0') : '0',
    feeOptions: feeOptions,
    feeType: feeChainType,
    id: id
  };
};

export const calculateXCMMaxTransferable = async (id: string, request: CalculateMaxTransferable, freeBalance: AmountData, fee: FeeInfo): Promise<ResponseSubscribeTransfer> => {
  const { address, destChain, destToken, evmApi, feeCustom, feeOption, srcChain, srcToken, substrateApi } = request;
  const feeChainType = fee.type;
  let estimatedFee: string;
  let feeOptions: FeeDetail;
  let maxTransferable = new BigN(freeBalance.value);

  const isAvailBridgeFromEvm = _isPureEvmChain(srcChain) && isAvailChainBridge(destChain.slug);
  const isAvailBridgeFromAvail = isAvailChainBridge(srcChain.slug) && _isPureEvmChain(destChain);
  const isSnowBridgeEvmTransfer = _isPureEvmChain(srcChain) && _isSnowBridgeXcm(srcChain, destChain) && !isAvailBridgeFromEvm;
  const isPolygonBridgeTransfer = _isPolygonChainBridge(srcChain.slug, destChain.slug);
  const isPosBridgeTransfer = _isPosChainBridge(srcChain.slug, destChain.slug);

  const fakeAddress = '5DRewsYzhJqZXU3SRaWy1FSt5iDr875ao91aw5fjrJmDG4Ap'; // todo: move this
  const substrateAddress = fakeAddress; // todo: move this
  const evmAddress = u8aToHex(addressToEvm(fakeAddress)); // todo: move this

  const recipient = _isChainEvmCompatible(destChain) ? evmAddress : substrateAddress;

  try {
    if (!destToken) {
      maxTransferable = BN_ZERO;

      throw Error('Destination token is not available');
    }

    const params: CreateXcmExtrinsicProps = {
      destinationTokenInfo: destToken,
      originTokenInfo: srcToken,
      // If value is 0, substrate will throw error when estimating fee
      sendingValue: feeChainType === 'substrate' ? '1000000000000000000' : '0',
      sender: address,
      recipient,
      destinationChain: destChain,
      originChain: srcChain,
      substrateApi,
      evmApi,
      feeCustom,
      feeOption,
      feeInfo: fee
    };

    let funcCreateExtrinsic: FunctionCreateXcmExtrinsic;

    if (isPosBridgeTransfer || isPolygonBridgeTransfer) {
      funcCreateExtrinsic = createPolygonBridgeExtrinsic;
    } else if (isSnowBridgeEvmTransfer) {
      funcCreateExtrinsic = createSnowBridgeExtrinsic;
    } else if (isAvailBridgeFromEvm) {
      funcCreateExtrinsic = createAvailBridgeTxFromEth;
    } else if (isAvailBridgeFromAvail) {
      funcCreateExtrinsic = createAvailBridgeExtrinsicFromAvail;
    } else {
      funcCreateExtrinsic = createXcmExtrinsic;
    }

    const extrinsic = await funcCreateExtrinsic(params);

    if (feeChainType === 'evm') {
      // Calculate fee for evm transaction
      const tx = extrinsic as TransactionConfig;

      const gasLimit = tx.gas?.toString() || (await evmApi.api.eth.estimateGas(tx)).toString();

      const _feeCustom = feeCustom as EvmEIP1559FeeOption;
      const combineFee = combineEthFee(fee, feeOption, _feeCustom);

      if (combineFee.maxFeePerGas) {
        estimatedFee = new BigN(combineFee.maxFeePerGas).multipliedBy(gasLimit).toFixed(0);
      } else {
        estimatedFee = new BigN(combineFee.gasPrice || '0').multipliedBy(gasLimit).toFixed(0);
      }

      feeOptions = {
        ...fee,
        estimatedFee,
        gasLimit: gasLimit.toString()
      };
    } else if (feeChainType === 'substrate') {
      // Calculate fee for substrate transaction
      try {
        const paymentInfo = await (extrinsic as SubmittableExtrinsic<'promise'>).paymentInfo(address);

        estimatedFee = paymentInfo?.partialFee?.toString() || '0';
      } catch (e) {
        estimatedFee = '0';
      }

      const _feeCustom = feeCustom as SubstrateTipInfo;

      const tip = combineSubstrateFee(fee, feeOption, _feeCustom).tip;

      estimatedFee = new BigN(estimatedFee).plus(tip).toFixed(0);

      feeOptions = {
        ...fee,
        estimatedFee
      };
    } else {
      // Not implemented yet
      estimatedFee = '0';
      feeOptions = {
        ...fee,
        estimatedFee: '0'
      };
    }
  } catch (e) {
    estimatedFee = '0';

    if (fee.type === 'evm') {
      feeOptions = {
        ...fee,
        estimatedFee,
        gasLimit: '0'
      };
    } else {
      feeOptions = {
        ...fee,
        estimatedFee
      };
    }

    console.warn('Unable to estimate fee', e);
  }

  maxTransferable = maxTransferable
    .minus(new BigN(estimatedFee).multipliedBy(XCM_FEE_RATIO));

  return {
    maxTransferable: !_isNativeToken(srcToken)
      ? freeBalance.value
      : maxTransferable.gt(BN_ZERO) ? (maxTransferable.toFixed(0) || '0') : '0',
    feeOptions: feeOptions,
    feeType: feeChainType,
    id: id
  };
};
