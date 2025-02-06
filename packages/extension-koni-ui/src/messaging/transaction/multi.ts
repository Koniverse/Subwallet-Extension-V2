// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SWTransactionResponse } from '@subwallet/extension-base/services/transaction-service/types';
import { RequestSubmitMultiProcess } from '@subwallet/extension-base/types';

import { sendMessage } from '../base';

export async function submitMulti (request: RequestSubmitMultiProcess): Promise<SWTransactionResponse> {
  return sendMessage('pri(transaction.multi.process)', request);
}
