// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0

import { Asset, Assets, Chain, Chains } from '@chainflip/sdk/swap';
import { COMMON_ASSETS, COMMON_CHAIN_SLUGS } from '@subwallet/chain-list';
import { _ChainAsset } from '@subwallet/chain-list/types';
import { _getAssetDecimals } from '@subwallet/extension-base/services/chain-service/utils';
import { SwapFeeInfo, SwapPair, SwapProviderId, SwapStepDetail, SwapStepType } from '@subwallet/extension-base/types/swap';
import BigN from 'bignumber.js';

export const CHAIN_FLIP_TESTNET_EXPLORER = 'https://blocks-perseverance.chainflip.io';
export const CHAIN_FLIP_MAINNET_EXPLORER = 'https://scan.chainflip.io';

export const CHAIN_FLIP_SUPPORTED_MAINNET_MAPPING: Record<string, Chain> = {
  [COMMON_CHAIN_SLUGS.POLKADOT]: Chains.Polkadot,
  [COMMON_CHAIN_SLUGS.ETHEREUM]: Chains.Ethereum
};

export const CHAIN_FLIP_SUPPORTED_TESTNET_MAPPING: Record<string, Chain> = {
  [COMMON_CHAIN_SLUGS.ETHEREUM_SEPOLIA]: Chains.Ethereum,
  [COMMON_CHAIN_SLUGS.CHAINFLIP_POLKADOT]: Chains.Polkadot
};

export const CHAIN_FLIP_SUPPORTED_MAINNET_ASSET_MAPPING: Record<string, Asset> = {
  [COMMON_ASSETS.DOT]: Assets.DOT,
  [COMMON_ASSETS.ETH]: Assets.ETH,
  [COMMON_ASSETS.USDC_ETHEREUM]: Assets.USDC
};

export const CHAIN_FLIP_SUPPORTED_TESTNET_ASSET_MAPPING: Record<string, Asset> = {
  [COMMON_ASSETS.PDOT]: Assets.DOT,
  [COMMON_ASSETS.ETH_SEPOLIA]: Assets.ETH,
  [COMMON_ASSETS.USDC_SEPOLIA]: Assets.USDC
};

export const SWAP_QUOTE_TIMEOUT_MAP: Record<string, number> = { // in milliseconds
  default: 30000,
  [SwapProviderId.CHAIN_FLIP_TESTNET]: 30000,
  [SwapProviderId.CHAIN_FLIP_MAINNET]: 30000
};

export const DEFAULT_SWAP_FIRST_STEP: SwapStepDetail = {
  id: 0,
  name: 'Fill information',
  type: SwapStepType.DEFAULT
};

export const MOCK_SWAP_FEE: SwapFeeInfo = {
  feeComponent: [],
  defaultFeeToken: '',
  feeOptions: []
};

export function getSwapAlternativeAsset (swapPair: SwapPair): string | undefined {
  return swapPair?.metadata?.alternativeAsset as string;
}

export function getSwapAltToken (chainAsset: _ChainAsset): string | undefined {
  return chainAsset.metadata?.alternativeSwapAsset as string;
}

export function calculateSwapRate (fromAmount: string, toAmount: string, fromAsset: _ChainAsset, toAsset: _ChainAsset) {
  const bnFromAmount = new BigN(fromAmount);
  const bnToAmount = new BigN(toAmount);

  const decimalDiff = _getAssetDecimals(toAsset) - _getAssetDecimals(fromAsset);
  const bnRate = bnFromAmount.div(bnToAmount);

  return 1 / bnRate.times(10 ** decimalDiff).toNumber();
}
