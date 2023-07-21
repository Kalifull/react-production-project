import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import { articleViewActions, selectArticleIsInit } from '@/features/article-view-switcher';
import { fetchArticlesList } from './fetch-articles-list-data';

export const initArticlesListData = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPageInfo/initArticlesListData',
  async (_, { getState, dispatch }) => {
    const isInit = selectArticleIsInit(getState());

    if (!isInit) {
      dispatch(articleViewActions.initState());
      dispatch(fetchArticlesList({ page: 1 }));
    }
  }
);
