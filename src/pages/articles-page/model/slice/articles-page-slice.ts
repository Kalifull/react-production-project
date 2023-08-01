import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { PAGE_LIMIT_LIST, PAGE_LIMIT_TILE } from '@/features/article-view-switcher';

import { Article, ArticleViewEnum } from '@/entities/article';

import { LOCAL_STORAGE_ARTICLES_VIEW_KEY } from '@/shared/constant';

import { fetchArticlesList } from '../service/fetch-articles-list-data';

import type {
  ArticlesPageSchema,
  PayloadPage,
  PayloadFetchArticlesError,
} from '../types/articles-page-schema.interface';

const initialState: ArticlesPageSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: null,
  page: 1,
  hasMore: true,
};

export const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

const limit =
  localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) === ArticleViewEnum.TILE
    ? PAGE_LIMIT_TILE
    : PAGE_LIMIT_LIST;

export const articlesPageSlice = createSlice({
  name: 'articles-page-info',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>(initialState),
  reducers: {
    setPage(state, { payload: { page } }: PayloadAction<PayloadPage>) {
      state.page = page;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, { meta }) => {
        const { arg } = meta;

        state.isLoading = true;
        state.error = null;

        if (arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, { payload, meta }) => {
        const { arg } = meta;

        state.isLoading = false;
        state.hasMore = payload.length >= limit;

        if (arg.replace) {
          articlesAdapter.setAll(state, payload);
        } else {
          articlesAdapter.addMany(state, payload);
        }
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
