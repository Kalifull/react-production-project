import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers/store-provider';

import { ArticleViewEnum } from '@/entities/article';

import { PAGE_LIMIT_TILE } from '../slice/article-view-switcher-slice';

export const selectArticleViewState = (state: RootState) => state?.articleViewInfo;

export const selectArticleView = createSelector(
  [selectArticleViewState],
  (articleViewState) => articleViewState?.view || ArticleViewEnum.TILE
);

export const selectArticleLimit = createSelector(
  [selectArticleViewState],
  (articleViewState) => articleViewState?.limit || PAGE_LIMIT_TILE
);

export const selectArticleIsInit = createSelector(
  [selectArticleViewState],
  (articleViewState) => articleViewState?._isInitialized || false
);
