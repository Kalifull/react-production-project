import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers/store-provider';

export const selectProfileState = (state: RootState) => state?.profileInfo;

export const selectProfileData = createSelector(
  [selectProfileState],
  (profileState) => profileState?.profileData
);

export const selectFormData = createSelector(
  [selectProfileState],
  (profileState) => profileState?.formData
);

export const selectProfileIsLoading = createSelector(
  [selectProfileState],
  (profileState) => profileState?.isLoading
);

export const selectProfileError = createSelector(
  [selectProfileState],
  (profileState) => profileState?.error
);

export const selectProfileReadOnly = createSelector(
  [selectProfileState],
  (profileState) => profileState?.readOnly
);
