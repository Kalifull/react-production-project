import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchArticleById } from '../service/fetch-article-by-id';

import type { Article } from '../types/article.interface';
import type { ArticleSchema, PayloadFetchArticleErrors } from '../types/article-schema.interface';

const initialState: ArticleSchema = {
  article: null,
  isLoading: false,
  error: null,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticleById.fulfilled, (state, { payload }: PayloadAction<Article>) => {
        state.article = payload;
        state.isLoading = false;
      })
      .addCase(
        fetchArticleById.rejected,
        (state, { payload }: PayloadAction<PayloadFetchArticleErrors>) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { actions: articleActions } = articleSlice;

export const { reducer: articleReducer } = articleSlice;
