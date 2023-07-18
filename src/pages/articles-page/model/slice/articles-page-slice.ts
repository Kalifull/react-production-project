import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Article, ArticleViewEnum } from '@/entities/article';

import { LOCAL_STORAGE_ARTICLES_VIEW_KEY } from '@/shared/constant';

import { fetchArticlesList } from '../service/fetch-articles-list-data';

import type {
  ArticlesPageSchema,
  PayloadView,
  PayloadFetchArticlesError,
} from '../types/articles-page-schema.interface';

const initialView = (localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) ||
  ArticleViewEnum.TILE) as ArticleViewEnum;

const initialState: ArticlesPageSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: null,
  view: initialView,
};

export const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const articlesPageSlice = createSlice({
  name: 'articles-page',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>(initialState),
  reducers: {
    setView(state, { payload: { view } }: PayloadAction<PayloadView>) {
      state.view = view;
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY, view);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticlesList.fulfilled, (state, { payload }: PayloadAction<Article[]>) => {
        articlesAdapter.setAll(state, payload);
        state.isLoading = false;
      })
      .addCase(
        fetchArticlesList.rejected,
        (state, { payload }: PayloadAction<PayloadFetchArticlesError>) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { actions: articlesPageActions } = articlesPageSlice;

export const { reducer: articlesPageReducer } = articlesPageSlice;
