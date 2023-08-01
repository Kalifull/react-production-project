import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ArticleViewEnum } from '@/entities/article';

import { LOCAL_STORAGE_ARTICLES_VIEW_KEY } from '@/shared/constant';

import type { ArticleViewSchema, PayloadView } from '../types/article-view-schema.interface';

const initialState: ArticleViewSchema = {
  view: ArticleViewEnum.TILE,
  _isInitialized: false,
};

export const PAGE_LIMIT_TILE = 9;
export const PAGE_LIMIT_LIST = 3;

export const articleViewSlice = createSlice({
  name: 'article-view-info',
  initialState,
  reducers: {
    initState(state) {
      const initView = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) as ArticleViewEnum;
      state.view = initView || ArticleViewEnum.TILE;
      state.limit = state.view === ArticleViewEnum.TILE ? PAGE_LIMIT_TILE : PAGE_LIMIT_LIST;
      state._isInitialized = true;
    },
    setView(state, { payload: { view } }: PayloadAction<PayloadView>) {
      state.view = view;
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY, view);
    },
  },
});

export const { actions: articleViewActions } = articleViewSlice;

export const { reducer: articleViewReducer } = articleViewSlice;
