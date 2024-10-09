// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { _ChainAsset, _ChainInfo } from '@subwallet/chain-list/types';
import { TransactionError } from '@subwallet/extension-base/background/errors/TransactionError';
import { _Address, AmountData, ExtrinsicDataTypeMap, ExtrinsicType, FeeData } from '@subwallet/extension-base/background/KoniTypes';
import { TransactionWarning } from '@subwallet/extension-base/background/warnings/TransactionWarning';
import { LEDGER_SIGNING_COMPATIBLE_MAP, SIGNING_COMPATIBLE_MAP, XCM_MIN_AMOUNT_RATIO } from '@subwallet/extension-base/constants';
import { _canAccountBeReaped, _isAccountActive } from '@subwallet/extension-base/core/substrate/system-pallet';
import { FrameSystemAccountInfo } from '@subwallet/extension-base/core/substrate/types';
import { isBounceableAddress } from '@subwallet/extension-base/services/balance-service/helpers/subscribe/ton/utils';
import { _TRANSFER_CHAIN_GROUP } from '@subwallet/extension-base/services/chain-service/constants';
import { _EvmApi, _TonApi } from '@subwallet/extension-base/services/chain-service/types';
import { _getChainExistentialDeposit, _getChainNativeTokenBasicInfo, _getContractAddressOfToken, _getTokenMinAmount, _isNativeToken, _isTokenEvmSmartContract, _isTokenTonSmartContract } from '@subwallet/extension-base/services/chain-service/utils';
import { calculateGasFeeParams } from '@subwallet/extension-base/services/fee-service/utils';
import { isSubstrateTransaction, isTonTransaction } from '@subwallet/extension-base/services/transaction-service/helpers';
import { OptionalSWTransaction, SWTransactionInput, SWTransactionResponse } from '@subwallet/extension-base/services/transaction-service/types';
import { AccountSignMode, BasicTxErrorType, BasicTxWarningCode, TransferTxErrorType } from '@subwallet/extension-base/types';
import { balanceFormatter, formatNumber, pairToAccount } from '@subwallet/extension-base/utils';
import { isTonAddress } from '@subwallet/keyring';
import { KeyringPair } from '@subwallet/keyring/types';
import { keyring } from '@subwallet/ui-keyring';
import BigN from 'bignumber.js';
import { t } from 'i18next';

import { isEthereumAddress } from '@polkadot/util-crypto';

// normal transfer
export function validateTransferRequest (tokenInfo: _ChainAsset, from: _Address, to: _Address, value: string | undefined, transferAll: boolean | undefined): [TransactionError[], KeyringPair | undefined, BigN | undefined] {
  const errors: TransactionError[] = [];
  const keypair = keyring.getPair(from);
  let transferValue;

  if (!transferAll) {
    if (value === undefined) {
      errors.push(new TransactionError(BasicTxErrorType.INVALID_PARAMS, t('Transfer amount is required')));
    }

    if (value) {
      transferValue = new BigN(value);
    }
  }

  if (!tokenInfo) {
    errors.push(new TransactionError(BasicTxErrorType.INVALID_PARAMS, t('Not found token from registry')));
  }

  if (isEthereumAddress(from) && isEthereumAddress(to) && _isTokenEvmSmartContract(tokenInfo) && _getContractAddressOfToken(tokenInfo).length === 0) {
    errors.push(new TransactionError(BasicTxErrorType.INVALID_PARAMS, t('Not found ERC20 address for this token')));
  }

  if (isTonAddress(from) && isTonAddress(to) && _isTokenTonSmartContract(tokenInfo) && _getContractAddressOfToken(tokenInfo).length === 0) {
    errors.push(new TransactionError(BasicTxErrorType.INVALID_PARAMS, t('Not found TEP74 address for this token')));
  }

  return [errors, keypair, transferValue];
}

export function additionalValidateTransfer (tokenInfo: _ChainAsset, nativeTokenInfo: _ChainAsset, extrinsicType: ExtrinsicType, receiverTransferTokenTotalBalance: string, transferAmount: string, senderTransferTokenTransferable?: string, _receiverNativeTotal?: string, isReceiverActive?: unknown): [TransactionWarning[], TransactionError[]] {
  const minAmount = _getTokenMinAmount(tokenInfo);
  const nativeMinAmount = _getTokenMinAmount(nativeTokenInfo);
  const warnings: TransactionWarning[] = [];
  const errors: TransactionError[] = [];

  // Check ed of not native token for sender after sending
  if (extrinsicType === ExtrinsicType.TRANSFER_TOKEN && senderTransferTokenTransferable) {
    if (new BigN(senderTransferTokenTransferable).minus(transferAmount).lt(minAmount)) {
      const warning = new TransactionWarning(BasicTxWarningCode.NOT_ENOUGH_EXISTENTIAL_DEPOSIT);

      warnings.push(warning);
    }
  }

  // Check ed for receiver before sending
  if (extrinsicType === ExtrinsicType.TRANSFER_TOKEN && _receiverNativeTotal) {
    if (new BigN(_receiverNativeTotal).lt(nativeMinAmount) && new BigN(nativeMinAmount).gt(0)) {
      const error = new TransactionError(TransferTxErrorType.RECEIVER_NOT_ENOUGH_EXISTENTIAL_DEPOSIT, t('The recipient account has {{amount}} {{nativeSymbol}} which can lead to your {{localSymbol}} being lost. Change recipient account and try again', { replace: { amount: _receiverNativeTotal, nativeSymbol: nativeTokenInfo.symbol, localSymbol: tokenInfo.symbol } }));

      errors.push(error);
    }
  }

  // Check if receiver's account is active
  if (isReceiverActive && _isAccountActive(isReceiverActive as FrameSystemAccountInfo)) {
    const error = new TransactionError(TransferTxErrorType.RECEIVER_ACCOUNT_INACTIVE, t('The recipient account may be inactive. Change recipient account and try again'));

    errors.push(error);
  }

  // Check ed for receiver after sending
  if (new BigN(receiverTransferTokenTotalBalance).plus(transferAmount).lt(minAmount)) {
    const atLeast = new BigN(minAmount).minus(receiverTransferTokenTotalBalance).plus((tokenInfo.decimals || 0) === 0 ? 0 : 1);

    const atLeastStr = formatNumber(atLeast, tokenInfo.decimals || 0, balanceFormatter, { maxNumberFormat: tokenInfo.decimals || 6 });

    const error = new TransactionError(TransferTxErrorType.RECEIVER_NOT_ENOUGH_EXISTENTIAL_DEPOSIT, t('You must transfer at least {{amount}} {{symbol}} to keep the destination account alive', { replace: { amount: atLeastStr, symbol: tokenInfo.symbol } }));

    errors.push(error);
  }

  return [warnings, errors];
}

// xcm transfer
export function validateXcmTransferRequest (destTokenInfo: _ChainAsset | undefined, sender: _Address, sendingValue: string): [TransactionError[], KeyringPair | undefined, BigN | undefined] {
  const errors = [] as TransactionError[];
  const keypair = keyring.getPair(sender);
  const transferValue = new BigN(sendingValue);

  if (!destTokenInfo) {
    errors.push(new TransactionError(TransferTxErrorType.INVALID_TOKEN, t('Not found token from registry')));
  }

  return [errors, keypair, transferValue];
}

export function additionalValidateXcmTransfer (originTokenInfo: _ChainAsset, destinationTokenInfo: _ChainAsset, sendingAmount: string, senderTransferable: string, receiverNativeBalance: string, destChainInfo: _ChainInfo, isSnowBridge = false): [TransactionWarning | undefined, TransactionError | undefined] {
  const destMinAmount = _getTokenMinAmount(destinationTokenInfo);
  const minSendingRequired = new BigN(destMinAmount).multipliedBy(XCM_MIN_AMOUNT_RATIO);

  let error: TransactionError | undefined;
  let warning: TransactionWarning | undefined;

  // Check sending token ED for receiver
  if (new BigN(sendingAmount).lt(minSendingRequired)) {
    const atLeastStr = formatNumber(minSendingRequired, destinationTokenInfo.decimals || 0, balanceFormatter, { maxNumberFormat: destinationTokenInfo.decimals || 6 });

    error = new TransactionError(TransferTxErrorType.RECEIVER_NOT_ENOUGH_EXISTENTIAL_DEPOSIT, t('You must transfer at least {{amount}} {{symbol}} to keep the destination account alive', { replace: { amount: atLeastStr, symbol: originTokenInfo.symbol } }));
  }

  // check native token ED on dest chain for receiver
  const bnKeepAliveBalance = _isNativeToken(destinationTokenInfo) ? new BigN(receiverNativeBalance).plus(sendingAmount) : new BigN(receiverNativeBalance);

  if (isSnowBridge && bnKeepAliveBalance.lt(_getChainExistentialDeposit(destChainInfo))) {
    const { decimals, symbol } = _getChainNativeTokenBasicInfo(destChainInfo);
    const atLeastStr = formatNumber(_getChainExistentialDeposit(destChainInfo), decimals || 0, balanceFormatter, { maxNumberFormat: 6 });

    error = new TransactionError(TransferTxErrorType.RECEIVER_NOT_ENOUGH_EXISTENTIAL_DEPOSIT, t(' Insufficient {{symbol}} on {{chain}} to cover min balance ({{amount}} {{symbol}})', { replace: { amount: atLeastStr, symbol, chain: destChainInfo.name } }));
  }

  // Check ed for sender
  if (!_isNativeToken(originTokenInfo)) {
    if (new BigN(senderTransferable).minus(sendingAmount).lt(_getTokenMinAmount(originTokenInfo))) {
      warning = new TransactionWarning(BasicTxWarningCode.NOT_ENOUGH_EXISTENTIAL_DEPOSIT);
    }
  }

  return [warning, error];
}

export function checkSupportForFeature (validationResponse: SWTransactionResponse, blockedFeaturesList: string[], chainInfo: _ChainInfo) {
  const extrinsicType = validationResponse.extrinsicType;
  const chain = validationResponse.chain;
  const currentFeature = `${extrinsicType}___${chain}`;

  if (blockedFeaturesList.includes(currentFeature)) {
    validationResponse.errors.push(new TransactionError(BasicTxErrorType.UNSUPPORTED, t(`Feature under maintenance on ${chainInfo.name} network. Try again later`)));
  }
}

export function checkSupportForAction (validationResponse: SWTransactionResponse, blockedActionsMap: Record<ExtrinsicType, string[]>) {
  const extrinsicType = validationResponse.extrinsicType;
  let currentAction = '';

  switch (extrinsicType) {
    case ExtrinsicType.TRANSFER_BALANCE:

    // eslint-disable-next-line no-fallthrough
    case ExtrinsicType.TRANSFER_TOKEN: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.TRANSFER_BALANCE];
      const tokenSlug = data.tokenSlug;

      currentAction = `${extrinsicType}___${tokenSlug}`;
      break;
    }

    case ExtrinsicType.TRANSFER_XCM: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.TRANSFER_XCM];
      const tokenSlug = data.tokenSlug;
      const destinationNetworkKey = data.destinationNetworkKey;

      currentAction = `${extrinsicType}___${tokenSlug}___${destinationNetworkKey}`;
      break;
    }

    case ExtrinsicType.SEND_NFT: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.SEND_NFT];
      const networkKey = data.networkKey;
      const collectionId = data.nftItem.collectionId;

      currentAction = `${extrinsicType}___${networkKey}___${collectionId}`;
      break;
    }

    case ExtrinsicType.SWAP: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.SWAP];
      const pairSlug = data.quote.pair.slug;
      const providerId = data.provider.id;

      currentAction = `${extrinsicType}___${pairSlug}___${providerId}`;
      break;
    }

    case ExtrinsicType.STAKING_BOND: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.STAKING_BOND];
      const chain = data.chain;

      currentAction = `${extrinsicType}___${chain}`;
      break;
    }

    case ExtrinsicType.STAKING_LEAVE_POOL: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.STAKING_LEAVE_POOL];
      const slug = data.slug;

      currentAction = `${extrinsicType}___${slug}`;
      break;
    }

    case ExtrinsicType.STAKING_UNBOND: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.STAKING_UNBOND];
      const chain = data.chain;

      currentAction = `${extrinsicType}___${chain}`;
      break;
    }

    case ExtrinsicType.STAKING_CLAIM_REWARD: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.STAKING_CLAIM_REWARD];
      const slug = data.slug;

      currentAction = `${extrinsicType}___${slug}`;
      break;
    }

    case ExtrinsicType.STAKING_WITHDRAW: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.STAKING_WITHDRAW];
      const slug = data.slug;

      currentAction = `${extrinsicType}___${slug}`;
      break;
    }

    case ExtrinsicType.STAKING_COMPOUNDING: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.STAKING_COMPOUNDING];
      const networkKey = data.networkKey;

      currentAction = `${extrinsicType}___${networkKey}`;
      break;
    }

    case ExtrinsicType.STAKING_CANCEL_COMPOUNDING: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.STAKING_CANCEL_COMPOUNDING];
      const networkKey = data.networkKey;

      currentAction = `${extrinsicType}___${networkKey}`;
      break;
    }

    case ExtrinsicType.STAKING_CANCEL_UNSTAKE: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.STAKING_CANCEL_UNSTAKE];
      const slug = data.slug;

      currentAction = `${extrinsicType}___${slug}`;
      break;
    }

    case ExtrinsicType.JOIN_YIELD_POOL: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.JOIN_YIELD_POOL];
      const slug = data.data.slug;

      currentAction = `${extrinsicType}___${slug}`;
      break;
    }

    case ExtrinsicType.MINT_VDOT:
    case ExtrinsicType.MINT_LDOT:
    case ExtrinsicType.MINT_SDOT:
    case ExtrinsicType.MINT_QDOT:
    case ExtrinsicType.MINT_STDOT:

    // eslint-disable-next-line no-fallthrough
    case ExtrinsicType.MINT_VMANTA: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.MINT_VMANTA];
      const slug = data.slug;

      currentAction = `${extrinsicType}___${slug}`;
      break;
    }

    case ExtrinsicType.REDEEM_VDOT:
    case ExtrinsicType.REDEEM_LDOT:
    case ExtrinsicType.REDEEM_SDOT:
    case ExtrinsicType.REDEEM_QDOT:
    case ExtrinsicType.REDEEM_STDOT:

    // eslint-disable-next-line no-fallthrough
    case ExtrinsicType.REDEEM_VMANTA: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.REDEEM_VMANTA];
      const slug = data.slug;

      currentAction = `${extrinsicType}___${slug}`;
      break;
    }

    case ExtrinsicType.UNSTAKE_VDOT:
    case ExtrinsicType.UNSTAKE_LDOT:
    case ExtrinsicType.UNSTAKE_SDOT:
    case ExtrinsicType.UNSTAKE_QDOT:
    case ExtrinsicType.UNSTAKE_STDOT:

    // eslint-disable-next-line no-fallthrough
    case ExtrinsicType.UNSTAKE_VMANTA: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.UNSTAKE_VMANTA];
      const slug = data.slug;

      currentAction = `${extrinsicType}___${slug}`;
      break;
    }

    case ExtrinsicType.TOKEN_SPENDING_APPROVAL: {
      const data = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.TOKEN_SPENDING_APPROVAL];
      const chain = data.chain;

      currentAction = `${extrinsicType}___${chain}`;
      break;
    }
  }

  const blockedActionsList = Object.values(blockedActionsMap).flat();

  if (blockedActionsList.includes(currentAction)) {
    validationResponse.errors.push(new TransactionError(BasicTxErrorType.UNSUPPORTED, t('Feature under maintenance. Try again later')));
  }
}

// general validations
export function checkSupportForTransaction (validationResponse: SWTransactionResponse, transaction: OptionalSWTransaction) {
  const { extrinsicType } = validationResponse;

  if (!transaction) {
    if (extrinsicType === ExtrinsicType.SEND_NFT) {
      validationResponse.errors.push(new TransactionError(BasicTxErrorType.UNSUPPORTED, t('This feature is not yet available for this NFT')));
    } else {
      validationResponse.errors.push(new TransactionError(BasicTxErrorType.UNSUPPORTED));
    }
  }
}

export async function estimateFeeForTransaction (validationResponse: SWTransactionResponse, transaction: OptionalSWTransaction, chainInfo: _ChainInfo, evmApi: _EvmApi): Promise<FeeData> {
  const estimateFee: FeeData = {
    symbol: '',
    decimals: 0,
    value: '0',
    tooHigh: false
  };
  const { decimals, symbol } = _getChainNativeTokenBasicInfo(chainInfo);

  estimateFee.decimals = decimals;
  estimateFee.symbol = symbol;

  if (transaction) {
    try {
      if (isSubstrateTransaction(transaction)) {
        estimateFee.value = (await transaction.paymentInfo(validationResponse.address)).partialFee.toString();
      } else if (isTonTransaction(transaction)) {
        estimateFee.value = transaction.estimateFee; // todo: might need to update logic estimate fee inside for future actions excluding normal transfer Ton and Jetton
      } else {
        const gasLimit = await evmApi.api.eth.estimateGas(transaction);

        const priority = await calculateGasFeeParams(evmApi, chainInfo.slug);

        if (priority.baseGasFee) {
          const maxFee = priority.maxFeePerGas; // TODO: Need review

          estimateFee.value = maxFee.multipliedBy(gasLimit).toFixed(0);
        } else {
          estimateFee.value = new BigN(priority.gasPrice).multipliedBy(gasLimit).toFixed(0);
        }

        estimateFee.tooHigh = priority.busyNetwork;
      }
    } catch (e) {
      const error = e as Error;

      if (error.message.includes('gas required exceeds allowance') && error.message.includes('insufficient funds')) {
        validationResponse.errors.push(new TransactionError(BasicTxErrorType.NOT_ENOUGH_BALANCE));
      }
    }
  }

  return estimateFee;
}

export function checkSigningAccountForTransaction (validationResponse: SWTransactionResponse, chainInfoMap: Record<string, _ChainInfo>) {
  const { address, chain, chainType, extrinsicType } = validationResponse;
  const pair = keyring.getPair(address);

  if (!pair) {
    validationResponse.errors.push(new TransactionError(BasicTxErrorType.INTERNAL_ERROR, t('Unable to find account')));
  } else {
    const accountJson = pairToAccount(pair, chainInfoMap);

    if (!accountJson.transactionActions.includes(extrinsicType)) { // check if the account can sign the transaction type
      validationResponse.errors.push(new TransactionError(BasicTxErrorType.INVALID_PARAMS, t('This feature is not available with this account')));
    } else if (accountJson.specialChain && accountJson.specialChain !== chain) { // check if the account can only be used on a specific chain (for ledger legacy)
      validationResponse.errors.push(new TransactionError(BasicTxErrorType.INVALID_PARAMS, t('This feature is not available with this account')));
    } else {
      const compatibleMap = [AccountSignMode.LEGACY_LEDGER, AccountSignMode.GENERIC_LEDGER].includes(accountJson.signMode) ? LEDGER_SIGNING_COMPATIBLE_MAP : SIGNING_COMPATIBLE_MAP;

      if (!compatibleMap[chainType].includes(accountJson.chainType)) { // check if the account chain type is compatible with the transaction chain type
        validationResponse.errors.push(new TransactionError(BasicTxErrorType.INVALID_PARAMS, t('This feature is not available with this account')));
      }
    }
  }
}

export function checkBalanceWithTransactionFee (validationResponse: SWTransactionResponse, transactionInput: SWTransactionInput, nativeTokenInfo: _ChainAsset, nativeTokenAvailable: AmountData) {
  if (!validationResponse.estimateFee) { // todo: estimateFee should be must-have, need to refactor interface
    return;
  }

  const { edAsWarning, extrinsicType, isTransferAll, skipFeeValidation } = transactionInput;

  if (skipFeeValidation) {
    return;
  }

  const bnFee = new BigN(validationResponse.estimateFee.value);
  const bnNativeTokenAvailable = new BigN(nativeTokenAvailable.value);
  const bnNativeTokenTransferAmount = new BigN(validationResponse.transferNativeAmount || '0');

  if (!bnNativeTokenAvailable.gt(0)) {
    validationResponse.errors.push(new TransactionError(BasicTxErrorType.NOT_ENOUGH_BALANCE));
  }

  const isChainNotSupportTransferAll = [
    ..._TRANSFER_CHAIN_GROUP.acala,
    ..._TRANSFER_CHAIN_GROUP.genshiro,
    ..._TRANSFER_CHAIN_GROUP.bitcountry,
    ..._TRANSFER_CHAIN_GROUP.statemine
  ].includes(nativeTokenInfo.originChain);

  if (bnNativeTokenTransferAmount.plus(bnFee).gt(bnNativeTokenAvailable) && (!isTransferAll || isChainNotSupportTransferAll)) {
    validationResponse.errors.push(new TransactionError(BasicTxErrorType.NOT_ENOUGH_BALANCE)); // todo: should be generalized and reused in all features
  }

  // todo: only system.pallet has metadata, we should add for other pallets and mechanisms as well
  const isNeedCheckRemainingBalance = !isTransferAll && extrinsicType === ExtrinsicType.TRANSFER_BALANCE && nativeTokenAvailable.metadata && _canAccountBeReaped(nativeTokenAvailable.metadata as FrameSystemAccountInfo);
  const isRemainingBalanceValid = bnNativeTokenAvailable.minus(bnNativeTokenTransferAmount).minus(bnFee).lt(_getTokenMinAmount(nativeTokenInfo));

  if (isNeedCheckRemainingBalance && isRemainingBalanceValid) {
    edAsWarning
      ? validationResponse.warnings.push(new TransactionWarning(BasicTxWarningCode.NOT_ENOUGH_EXISTENTIAL_DEPOSIT))
      : validationResponse.errors.push(new TransactionError(BasicTxErrorType.NOT_ENOUGH_EXISTENTIAL_DEPOSIT));
  }
}

export async function checkTonAddressBounceableAndAccountNotActive (tonApi: _TonApi, validationResponse: SWTransactionResponse) {
  const { to } = validationResponse.data as ExtrinsicDataTypeMap[ExtrinsicType.TRANSFER_BALANCE];
  const isActive = await isAccountActive(tonApi, to);

  if (isTonAddressBounceable(to) && !isActive) {
    validationResponse.warnings.push(new TransactionWarning(BasicTxWarningCode.IS_BOUNCEABLE_ADDRESS));
  }
}

function isTonAddressBounceable (address: string) {
  return isBounceableAddress(address);
}

async function isAccountActive (tonApi: _TonApi, address: string) {
  const state = await tonApi.getAccountState(address);

  return state === 'active';
}
