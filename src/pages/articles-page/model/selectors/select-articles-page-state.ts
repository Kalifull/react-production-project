import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers/store-provider';

import { ArticleViewEnum } from '@/entities/article';

import { articlesAdapter, PAGE_LIMIT_TILE } from '../slice/articles-page-slice';

export const selectArticlesPageState = (state: RootState) => state?.articlesPageInfo;

export const selectArticlesPageInfo = articlesAdapter.getSelectors<RootState>(
  (state) => state.articlesPageInfo || articlesAdapter.getInitialState()
);

export const selectArticlesPageIsLoading = createSelector(
  [selectArticlesPageState],
  (articlesState) => articlesState?.isLoading
);

export const selectArticlesPageError = createSelector(
  [selectArticlesPageState],
  (articlesState) => articlesState?.error
);

export const selectArticlesPageView = createSelector(
  [selectArticlesPageState],
  (articlesState) => articlesState?.view || ArticleViewEnum.TILE
);

export const selectArticlesPage = createSelector(
  [selectArticlesPageState],
  (articlesState) => articlesState?.page || 1
);

export const selectArticlesLimit = createSelector(
  [selectArticlesPageState],
  (articlesState) => articlesState?.limit || PAGE_LIMIT_TILE
);

export const selectArticlesHasMore = createSelector(
  [selectArticlesPageState],
  (articlesState) => articlesState?.hasMore
);
