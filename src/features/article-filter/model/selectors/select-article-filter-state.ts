import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers/store-provider';

import { ArticleTypeEnum } from '@/entities/article';

import { ArticleSortEnum, ArticleOrderEnum } from '../types/article-filter.interface';

export const selectArticleFilterState = (state: RootState) =>
  state.articleSortingPanelInfo?.articleFilterInfo;

export const selectArticleOrder = createSelector(
  [selectArticleFilterState],
  (articleViewState) => articleViewState?.order ?? ArticleOrderEnum.ASC
);

export const selectArticleSort = createSelector(
  [selectArticleFilterState],
  (articleViewState) => articleViewState?.sort ?? ArticleSortEnum.CREATED_AT
);

export const selectArticleSearch = createSelector(
  [selectArticleFilterState],
  (articleViewState) => articleViewState?.search ?? ''
);

export const selectArticleType = createSelector(
  [selectArticleFilterState],
  (articleViewState) => articleViewState?.type ?? ArticleTypeEnum.ALL
);
