// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0

import { RequestYieldStepSubmit, SwapSubmitParams } from '@subwallet/extension-base/types';

export interface RequestSubmitMultiProcess {
  type: 'swap' | 'earning';
  request: SwapSubmitParams | RequestYieldStepSubmit;
  id: string;
}
