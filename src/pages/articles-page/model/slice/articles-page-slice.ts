import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import type { Article } from '@/entities/article';

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

export const articlesPageSlice = createSlice({
  name: 'articles-page',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>(initialState),
  reducers: {
    setPage(state, { payload: { page } }: PayloadAction<PayloadPage>) {
      state.page = page;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticlesList.fulfilled, (state, { payload }: PayloadAction<Article[]>) => {
        articlesAdapter.addMany(state, payload);
        state.isLoading = false;
        state.hasMore = payload.length > 0;
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
