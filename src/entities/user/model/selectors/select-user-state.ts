import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers/store-provider';

export const selectUserState = (state: RootState) => state.userInfo;

export const selectAuthData = createSelector([selectUserState], (userState) => userState.authData);
