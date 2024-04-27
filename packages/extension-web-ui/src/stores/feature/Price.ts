// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { createSlice, PayloadAction } from '@reduxjs/toolkit/dist';
import { PriceJson } from '@subwallet/extension-base/background/KoniTypes';
import { PriceStore } from '@subwallet/extension-web-ui/stores/types';

const initialState = {
  currency: { label: 'USD', symbol: '$', isPrefix: true },
  priceMap: {},
  price24hMap: {},
  exchangeRateMap: {},
  ready: false
} as PriceStore;

const priceSlice = createSlice({
  initialState,
  name: 'price',
  reducers: {
    updatePrice (state, action: PayloadAction<PriceJson>) {
      return {
        ...action.payload
      };
    }
  }
});

export const { updatePrice } = priceSlice.actions;
export default priceSlice.reducer;
