import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { ScrollSchema, PayloadScroll } from '../types/scroll-schema.interface';

const initialState: ScrollSchema = {
  scroll: {},
};

export const scrollRecoverySlice = createSlice({
  name: 'scroll-recovery-info',
  initialState,
  reducers: {
    setScrollPosition(state, { payload: { pathname, position } }: PayloadAction<PayloadScroll>) {
      state.scroll[pathname] = position;
    },
  },
});

export const { actions: scrollRecoveryActions } = scrollRecoverySlice;

export const { reducer: scrollRecoveryReducer } = scrollRecoverySlice;
