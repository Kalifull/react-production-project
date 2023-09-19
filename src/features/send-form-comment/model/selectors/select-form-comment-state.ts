import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/app/providers/store-provider';

export const selectFormCommentState = (state: RootState) => state?.formCommentInfo;

export const selectFormCommentText = createSelector(
  [selectFormCommentState],
  (commentFormState) => commentFormState?.text ?? ''
);

export const selectFormCommentIsLoading = createSelector(
  [selectFormCommentState],
  (commentFormState) => commentFormState?.isLoading
);

export const selectFormCommentError = createSelector(
  [selectFormCommentState],
  (commentFormState) => commentFormState?.error
);
