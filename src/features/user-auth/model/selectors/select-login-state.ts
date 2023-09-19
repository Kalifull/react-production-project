import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/app/providers/store-provider';

export const selectLoginState = (state: RootState) => state?.loginFormInfo;

export const selectLoginUsername = createSelector(
  [selectLoginState],
  (loginState) => loginState?.username || ''
);

export const selectLoginPassword = createSelector(
  [selectLoginState],
  (loginState) => loginState?.password || ''
);
