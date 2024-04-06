import qs from 'qs';
import { type FC, memo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  selectArticleOrder,
  selectArticleSearch,
  selectArticleSort,
  selectArticleType,
} from '@/features/article-filter';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { actionsCreators, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import { articlesPageReducer } from '../../model/slice/articles-page-slice';

import { ArticleInfiniteList } from '../article-infinite-list/ArticleInfiniteList';

const ArticlePage: FC = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { initArticlesListData } = useActionCreators(actionsCreators);

  const sort = useAppSelector(selectArticleSort);
  const order = useAppSelector(selectArticleOrder);
  const search = useAppSelector(selectArticleSearch);
  const type = useAppSelector(selectArticleType);

  const queryString = qs.stringify({ sort, order, search, type });

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      setSearchParams(queryString);
      initArticlesListData(searchParams);
    }
  }, [initArticlesListData, queryString, searchParams, setSearchParams]);

  return <ArticleInfiniteList />;
});

export default withAsyncReducers(ArticlePage, {
  reducers: { articlesPageInfo: articlesPageReducer },
  removeAfterUnmount: false,
});
