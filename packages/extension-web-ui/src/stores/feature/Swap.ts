// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MultiChainSwapPair, SwapPair } from '@subwallet/extension-base/types/swap';
import { ReduxStatus, SwapStore } from '@subwallet/extension-web-ui/stores/types';

const initialState: SwapStore = {
  multiChainSwapPairs: [],
  swapPairs: [],
  reduxStatus: ReduxStatus.INIT
};

const swapSlice = createSlice({
  initialState,
  name: 'swap',
  reducers: {
    updateSwapPairs (state, action: PayloadAction<SwapPair[]>): SwapStore {
      return {
        ...state,
        swapPairs: action.payload,
        reduxStatus: ReduxStatus.READY
      };
    },
    updateMultiChainPairs (state, action: PayloadAction<MultiChainSwapPair[]>): SwapStore {
      return {
        ...state,
        multiChainSwapPairs: action.payload,
        reduxStatus: ReduxStatus.READY
      };
    }
  }
});

export const { updateSwapPairs } = swapSlice.actions;
export default swapSlice.reducer;
