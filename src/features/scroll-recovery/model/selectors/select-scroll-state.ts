import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers/store-provider';

export const selectScrollState = (state: RootState) => state.scrollRecoveryInfo.scroll;

export const selectScrollPositionByPath = (pathname: string) =>
  createSelector([selectScrollState], (scrollState) => scrollState[pathname]);
