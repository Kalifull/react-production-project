import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/app/providers/store-provider';

import { commentsAdapter } from '../slice/comment-slice';

export const selectCommentsState = (state: RootState) => state.commentsInfo;

export const selectCommentsInfo = commentsAdapter.getSelectors<RootState>(
  (state) => state.commentsInfo || commentsAdapter.getInitialState()
);

export const selectCommentsIsLoading = createSelector(
  [selectCommentsState],
  (commentsState) => commentsState?.isLoading
);

export const selectCommentsError = createSelector(
  [selectCommentsState],
  (commentsState) => commentsState?.error
);
