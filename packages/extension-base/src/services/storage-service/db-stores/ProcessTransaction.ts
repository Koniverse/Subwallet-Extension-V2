// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ProcessTransactionData } from '@subwallet/extension-base/types';
import { liveQuery } from 'dexie';

import BaseStoreWithAddress from './BaseStoreWithAddress';

export default class ProcessTransaction extends BaseStoreWithAddress<ProcessTransactionData> {
  async getAll (): Promise<Record<string, ProcessTransactionData>> {
    const all = await this.table.toArray();

    return Object.fromEntries(all.map((item) => [item.id, item]));
  }

  observableAll () {
    return liveQuery(
      async (): Promise<Record<string, ProcessTransactionData>> => {
        const all = await this.table.toArray();

        return Object.fromEntries(all.map((item) => [item.id, item]));
      }
    );
  }

  async getOne (id: string) {
    return this.table.get(id);
  }

  observableOne (id: string) {
    return liveQuery(
      async () => {
        return this.table.get(id);
      }
    );
  }
}
