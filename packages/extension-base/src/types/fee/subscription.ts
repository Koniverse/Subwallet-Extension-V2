// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0

import { BehaviorSubject } from 'rxjs';

import { EvmEIP1559FeeOption, EvmFeeDetail, EvmFeeInfo } from './evm';
import { SubstrateFeeDetail, SubstrateFeeInfo, SubstrateTipInfo } from './substrate';
import { TonFeeDetail, TonFeeInfo, TonTipInfo } from './ton';

export type FeeInfo = EvmFeeInfo | SubstrateFeeInfo | TonFeeInfo;
export type FeeDetail = EvmFeeDetail | SubstrateFeeDetail | TonFeeDetail;
export type FeeCustom = EvmEIP1559FeeOption | SubstrateTipInfo | TonTipInfo;

export interface FeeSubscription {
  observer: BehaviorSubject<FeeInfo | undefined>;
  subscription: Record<string, VoidFunction>;
  unsubscribe: VoidFunction;
}
