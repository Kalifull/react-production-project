import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import { ArticleSortEnum, ArticleOrderEnum, articleFilterActions } from '@/features/article-filter';
import { articleViewActions, selectArticleIsInit } from '@/features/article-view-switcher';

import { fetchArticlesList } from './fetch-articles-list-data';

export const initArticlesListData = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPageInfo/initArticlesListData',
  async (searchParams, { getState, dispatch }) => {
    const isInit = selectArticleIsInit(getState());

    if (!isInit) {
      const sortFromUrl = searchParams.get('sort') as ArticleSortEnum;
      const orderFromUrl = searchParams.get('order') as ArticleOrderEnum;
      const searchFromUrl = searchParams.get('search');

      if (sortFromUrl) {
        dispatch(articleFilterActions.setArticleSort({ sort: sortFromUrl }));
      }

      if (orderFromUrl) {
        dispatch(articleFilterActions.setArticleOrder({ order: orderFromUrl }));
      }

      if (searchFromUrl) {
        dispatch(articleFilterActions.setArticleSearch({ search: searchFromUrl }));
      }

      dispatch(articleViewActions.initState());
      dispatch(fetchArticlesList({ replace: false }));
    }
  }
);
