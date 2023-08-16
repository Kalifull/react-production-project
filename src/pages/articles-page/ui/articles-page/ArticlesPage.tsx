import qs from 'qs';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { FC, memo, useCallback, useEffect } from 'react';

import { Page } from '@/widgets/page';
import { ArticleSortingPanel } from '@/widgets/article-sorting-panel';

import {
  articleFilterReducer,
  selectArticleOrder,
  selectArticleSearch,
  selectArticleSort,
  selectArticleType,
} from '@/features/article-filter';
import { articleViewReducer, selectArticleView } from '@/features/article-view-switcher';

import { ArticleList } from '@/entities/article';

import { TextVariantEnum } from '@/shared/api';

import { Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import {
  selectArticlesPageInfo,
  selectArticlesPageIsLoading,
  selectArticlesPageError,
} from '../../model/selectors/select-articles-page-state';
import { articlesPageReducer } from '../../model/slice/articles-page-slice';

import styles from './ArticlesPage.module.scss';

const ArticlePage: FC = memo(() => {
  const { t } = useTranslation('article');
  const [searchParams, setSearchParams] = useSearchParams();

  const { initArticlesListData, fetchNextArticlesPage } = useActionCreators(allActions);

  const sort = useAppSelector(selectArticleSort);
  const order = useAppSelector(selectArticleOrder);
  const search = useAppSelector(selectArticleSearch);
  const type = useAppSelector(selectArticleType);

  const queryString = qs.stringify({ sort, order, search, type });

  useEffect(() => {
    setSearchParams(queryString);
  }, [queryString, setSearchParams]);

  const articles = useAppSelector(selectArticlesPageInfo.selectAll);
  const isLoading = useAppSelector(selectArticlesPageIsLoading);
  const error = useAppSelector(selectArticlesPageError);
  const view = useAppSelector(selectArticleView);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      initArticlesListData(searchParams);
    }
  }, [initArticlesListData, searchParams]);

  const handleLoadNextPage = useCallback(() => {
    fetchNextArticlesPage();
  }, [fetchNextArticlesPage]);

  if (error) {
    return (
      <Page className={cn(styles['article-page'])}>
        <Text variant={TextVariantEnum.ERROR} title={t('failedLoadArticles')} text={t(error)} />
      </Page>
    );
  }

  return (
    <ArticleList
      articles={articles}
      view={view}
      Header={ArticleSortingPanel}
      isLoading={isLoading}
      onIntersect={handleLoadNextPage}
    />
  );
});

export default withAsyncReducers(ArticlePage, {
  reducers: {
    articlesPageInfo: articlesPageReducer,
    articleFilterInfo: articleFilterReducer,
    articleViewInfo: articleViewReducer,
  },
  removeAfterUnmount: false,
});
