import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import type { Article } from '@/entities/article';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, { rejectWithValue, extra }) => {
    try {
      const { data: articles } = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
        },
      });

      if (!articles) {
        throw new Error();
      }

      return articles;
    } catch (error) {
      return rejectWithValue('articlesPageError');
    }
  }
);
