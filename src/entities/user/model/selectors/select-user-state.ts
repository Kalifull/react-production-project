import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers/store-provider';

export const selectUserState = (state: RootState) => state.userInfo;

export const selectAuthData = createSelector([selectUserState], ({ authData }) => authData);

export const selectUserIsLoading = createSelector([selectUserState], ({ isLoading }) => isLoading);

export const selectUserError = createSelector([selectUserState], ({ error }) => error);
