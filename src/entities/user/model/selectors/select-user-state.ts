import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/app/providers/store-provider';

import { UserRoleEnum } from '../constants/const-user';

export const selectUserState = (state: RootState) => state.userInfo;

export const selectAuthData = createSelector([selectUserState], ({ authData }) => authData);

export const selectIsAdmin = createSelector([selectUserState], ({ authData }) =>
  Boolean(authData?.roles?.includes(UserRoleEnum.ADMIN))
);

export const selectIsManager = createSelector([selectUserState], ({ authData }) =>
  Boolean(authData?.roles?.includes(UserRoleEnum.MANAGER))
);

export const selectRoles = createSelector([selectUserState], ({ authData }) => authData?.roles);

export const selectUserIsLoading = createSelector([selectUserState], ({ isLoading }) => isLoading);

export const selectUserError = createSelector([selectUserState], ({ error }) => error);
