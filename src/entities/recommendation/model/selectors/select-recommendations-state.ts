import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers/store-provider';

import { recommendationsAdapter } from '../slice/recommendations-slice';

export const selectRecommendationsState = (state: RootState) => state.commentsInfo;

export const selectRecommendationsInfo = recommendationsAdapter.getSelectors<RootState>(
  (state) => state.recommendationsInfo || recommendationsAdapter.getInitialState()
);

export const selectRecommendationsIsLoading = createSelector(
  [selectRecommendationsState],
  (recommendationsState) => recommendationsState?.isLoading
);

export const selectRecommendationsError = createSelector(
  [selectRecommendationsState],
  (recommendationsState) => recommendationsState?.error
);
