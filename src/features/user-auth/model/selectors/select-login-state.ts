import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers/store-provider';

const selectLoginState = (state: RootState) => state?.loginFormInfo;

export const selectLoginUsername = createSelector(
  [selectLoginState],
  (loginState) => loginState?.username || ''
);

export const selectLoginPassword = createSelector(
  [selectLoginState],
  (loginState) => loginState?.password || ''
);
