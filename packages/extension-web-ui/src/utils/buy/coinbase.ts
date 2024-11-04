// Copyright 2019-2022 @subwallet/extension-web-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { generateOnRampURL } from '@coinbase/cbpay-js';
import { COINBASE_PAY_ID } from '@subwallet/extension-web-ui/constants';
import { CreateBuyOrderFunction } from '@subwallet/extension-web-ui/types';

export const createCoinbaseOrder: CreateBuyOrderFunction = (orderParams) => {
  const { address, network, symbol } = orderParams;

  return new Promise((resolve) => {
    const onRampURL = generateOnRampURL({
      appId: COINBASE_PAY_ID,
      destinationWallets: [
        { address: address, supportedNetworks: [network], assets: [symbol] }
      ]
    });

    resolve(onRampURL);
  });
};
