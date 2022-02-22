// Copyright 2019-2022 @polkadot/extension-koni-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise } from '@polkadot/api';
import { initApi } from '@polkadot/extension-koni-base/api/dotsama/api';
import NETWORKS from '@polkadot/extension-koni-base/api/endpoints';
import { AccountInfo } from '@polkadot/types/interfaces';
import connectDotSamaApis from "@polkadot/extension-koni-base/api/dotsama/index";
import {subscribeStaking} from "@polkadot/extension-koni-base/api/dotsama/staking";

jest.setTimeout(50000);

describe('test DotSama APIs', () => {
  let api: ApiPromise;

  beforeAll(async () => {
    const koniProp = await initApi(NETWORKS.koni.provider).isReady;

    api = koniProp.api;
  });

  afterAll(async () => {
    await api.disconnect();
  });

  it('test get Balances', async () => {
    const balances = await api.query.system.account.multi(['5FEdUhBmtK1rYifarmUXYzZhi6fmLbC6SZ7jcNvGuC2gaa2r']);

    balances.forEach((rs) => {
      // @ts-ignore
      const balanceInfo = rs as AccountInfo;

      expect(balanceInfo.data.free.toNumber()).toBeGreaterThanOrEqual(0);
    });
  });

  test('test get staking', async () => {
    const dotSamaAPIMap = connectDotSamaApis();
    const stakingInfo = await subscribeStaking(['5GedyoC1nULnjzk3m8qjZznsAtpnJPUQREVLDcXcgD1yLwrb', '7Hja2uSzxdqcJv1TJi8saFYsBjurQZtJE49v4SXVC5Dbm8KM'], dotSamaAPIMap);
    expect(stakingInfo.details.length).toBeGreaterThanOrEqual(0);
  });
});
