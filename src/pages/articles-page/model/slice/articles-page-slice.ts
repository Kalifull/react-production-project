import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Article, ArticleViewEnum } from '@/entities/article';

import { LOCAL_STORAGE_ARTICLES_VIEW_KEY } from '@/shared/constant';

import { fetchArticlesList } from '../service/fetch-articles-list-data';

import type {
  ArticlesPageSchema,
  PayloadPage,
  PayloadView,
  PayloadFetchArticlesError,
} from '../types/articles-page-schema.interface';

const initialState: ArticlesPageSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: null,
  view: ArticleViewEnum.TILE,
  page: 1,
  hasMore: true,
};

export const PAGE_LIMIT_TILE = 9;
const PAGE_LIMIT_LIST = 3;

export const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const articlesPageSlice = createSlice({
  name: 'articles-page',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>(initialState),
  reducers: {
    initState(state) {
      const initView = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) as ArticleViewEnum;
      state.view = initView || ArticleViewEnum.TILE;
      state.limit = state.view === ArticleViewEnum.TILE ? PAGE_LIMIT_TILE : PAGE_LIMIT_LIST;
    },
    setView(state, { payload: { view } }: PayloadAction<PayloadView>) {
      state.view = view;
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY, view);
    },
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
