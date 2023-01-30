// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { _ChainAsset, _ChainInfo } from '@subwallet/chain-list/types';
import { AuthUrlInfo } from '@subwallet/extension-base/background/handlers/State';
import { AddNetworkRequestExternal, BalanceItem, ConfirmationDefinitions, ConfirmationsQueue, ConfirmationType, CrowdloanItem, KeyringState, NftCollection, NftItem, StakingItem, StakingRewardItem, TransactionHistoryItemType, UiSettings, UnlockingStakeInfo, ValidatorInfo } from '@subwallet/extension-base/background/KoniTypes';
import { AccountJson, AccountsContext, AuthorizeRequest, MetadataRequest, SigningRequest } from '@subwallet/extension-base/background/types';
import { _ChainState } from '@subwallet/extension-base/services/chain-service/types';

import { SettingsStruct } from '@polkadot/ui-settings/types';

export type CurrentAccountType = {
  account?: AccountJson | null;
}

export type TransactionHistoryReducerType = {
  historyMap: Record<string, TransactionHistoryItemType[]>
}

export type TransferNftParams = {
  nftItem: NftItem;
  collectionImage?: string;
  collectionId: string;
}

export type TokenConfigParams = {
  data: _ChainAsset
}

export type NetworkConfigParams = {
  mode: 'create' | 'edit' | 'init',
  data?: _ChainInfo;
  externalData?: AddNetworkRequestExternal;
}

export type BondingParams = {
  selectedAccount: string | null;
  selectedNetwork: string | null;
  selectedValidator: ValidatorInfo | null;
  maxNominatorPerValidator: number | null;
  isBondedBefore: boolean | null;
  bondedValidators: string[] | null;
}

export type UnbondingParams = {
  selectedAccount: string | null;
  selectedNetwork: string | null;
  bondedAmount: number | null;
}

export type StakeCompoundParams = {
  selectedAccount: string;
  selectedNetwork: string;
}

export type KeyringStateParams = {
  mode: 'create' | 'edit' | 'init',
  data: _ChainInfo;
}

export type StakingRewardJson_ = {
  details: StakingRewardItem[],
  ready: boolean
}

export enum ReduxStatus {
  INIT = 'init',
  CACHED = 'cached',
  READY = 'ready'
}

export interface BaseReduxStore {
  reduxStatus: ReduxStatus
}

export interface AppSettings extends UiSettings, SettingsStruct, BaseReduxStore {
  authUrls: Record<string, AuthUrlInfo>,
  mediaAllowed: boolean
}

export interface AccountState extends AccountsContext, KeyringState, BaseReduxStore {
  currentAccount: AccountJson | null
}

export interface RequestState extends BaseReduxStore {
  authorizeRequest: AuthorizeRequest[],
  metadataRequest: MetadataRequest[],
  signingRequest: SigningRequest[],
  confirmationQueue: ConfirmationsQueue
}

export interface UpdateConfirmationsQueueRequest extends BaseReduxStore {
  type: ConfirmationType,
  data: Record<string, ConfirmationDefinitions[ConfirmationType][0]>
}

export interface AssetRegistryStore extends BaseReduxStore {
  assetRegistry: Record<string, _ChainAsset>;
}

export interface ChainStore extends BaseReduxStore {
  chainInfoMap: Record<string, _ChainInfo>,
  chainStateMap: Record<string, _ChainState>
}

export interface BalanceStore extends BaseReduxStore {
  balanceMap: Record<string, BalanceItem>
}

export interface CrowdloanStore extends BaseReduxStore {
  crowdloanMap: Record<string, CrowdloanItem>
}

export interface NftStore extends BaseReduxStore {
  nftItems: NftItem[],
  nftCollections: NftCollection[]
}

export interface StakingStore extends BaseReduxStore {
  stakingMap: Record<string, StakingItem>,
  stakingRewardMap: Record<string, StakingRewardItem>,
  stakeUnlockingMap: Record<string, UnlockingStakeInfo>
}
