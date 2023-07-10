import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers/store-provider';

export const selectArticleState = (state: RootState) => state?.articleInfo;

export const selectArticleData = createSelector(
  [selectArticleState],
  (articleState) => articleState?.article
);

export const selectArticleIsLoading = createSelector(
  [selectArticleState],
  (articleState) => articleState?.isLoading
);

export const selectArticleError = createSelector(
  [selectArticleState],
  (articleState) => articleState?.error
);
