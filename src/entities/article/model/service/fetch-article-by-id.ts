import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import type { Article } from '../types/article.interface';

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (articleId, { rejectWithValue, extra }) => {
    try {
      if (!articleId) {
        return rejectWithValue('articleError');
      }

      const { data: article } = await extra.api.get<Article>(`/articles/${articleId}`);

      if (!article) {
        throw new Error();
      }

      return article;
    } catch (error) {
      return rejectWithValue('articleError');
    }
  }
);
