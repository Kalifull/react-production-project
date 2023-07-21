import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import { fetchArticlesList } from './fetch-articles-list-data';

import {
  selectArticlesPage,
  selectArticlesHasMore,
  selectArticlesPageIsLoading,
} from '../selectors/select-articles-page-state';
import { articlesPageActions } from '../slice/articles-page-slice';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPageInfo/fetchNextArticlesPage',
  async (_, { getState, dispatch }) => {
    const page = selectArticlesPage(getState());
    const hasMore = selectArticlesHasMore(getState());
    const isLoading = selectArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage({ page: page + 1 }));
      dispatch(fetchArticlesList({ page: page + 1 }));
    }
  }
);
