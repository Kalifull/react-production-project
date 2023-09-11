import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import {
  selectArticleOrder,
  selectArticleSearch,
  selectArticleSort,
  selectArticleType,
} from '@/features/article-filter';
import { selectArticleLimit } from '@/features/article-view-switcher';

import { Article, ArticleTypeEnum } from '@/entities/article';

import { selectArticlesPage } from '../selectors/select-articles-page-state';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesListData = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPageInfo/fetchArticlesListData', async (_, { rejectWithValue, extra, getState }) => {
  const page = selectArticlesPage(getState());
  const limit = selectArticleLimit(getState());
  const sort = selectArticleSort(getState());
  const order = selectArticleOrder(getState());
  const search = selectArticleSearch(getState());
  const type = selectArticleType(getState());

  try {
    const { data: articles } = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleTypeEnum.ALL ? null : type,
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
