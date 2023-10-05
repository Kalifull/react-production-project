import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ArticleTypeEnum } from '@/entities/article';

import { ArticleSortEnum, ArticleOrderEnum } from '../constants/const-article-filter';
import type {
  ArticleFilterSchema,
  PayloadArticleOrder,
  PayloadArticleSort,
  PayloadArticleSearch,
  PayloadArticleType,
} from '../types/article-filter-schema.interface';

const initialState: ArticleFilterSchema = {
  order: ArticleOrderEnum.ASC,
  sort: ArticleSortEnum.CREATED_AT,
  search: '',
  type: ArticleTypeEnum.ALL,
};

export const articleFilterSlice = createSlice({
  name: 'article-filter-info',
  initialState,
  reducers: {
    setArticleOrder(state, { payload: { order } }: PayloadAction<PayloadArticleOrder>) {
      state.order = order;
    },
    setArticleSort(state, { payload: { sort } }: PayloadAction<PayloadArticleSort>) {
      state.sort = sort;
    },
    setArticleSearch(state, { payload: { search } }: PayloadAction<PayloadArticleSearch>) {
      state.search = search;
    },
    setArticleType(state, { payload: { type } }: PayloadAction<PayloadArticleType>) {
      state.type = type;
    },
  },
});

export const { actions: articleFilterActions } = articleFilterSlice;

export const { reducer: articleFilterReducer } = articleFilterSlice;
