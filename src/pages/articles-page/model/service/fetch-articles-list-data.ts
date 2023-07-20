import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import type { Article } from '@/entities/article';

import { selectArticlesLimit } from '../selectors/select-articles-page-state';

interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (params, { rejectWithValue, extra, getState }) => {
  const { page = 1 } = params;

  const limit = selectArticlesLimit(getState());

  try {
    const { data: articles } = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
      },
    });

    if (!articles) {
      throw new Error();
    }

    return articles;
  } catch (error) {
    return rejectWithValue('articlesPageError');
  }
});
