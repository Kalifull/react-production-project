import { useTranslation } from 'react-i18next';
import { FC, memo, useCallback, useEffect } from 'react';

import { ArticleViewSwitcher } from '@/features/article-view-switcher';

import { ArticleList } from '@/entities/article';

import { TextVariantEnum } from '@/shared/api';

import { Page, Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import { articlesPageReducer } from '../../model/slice/articles-page-slice';

import {
  selectArticlesPageInfo,
  selectArticlesPageIsLoading,
  selectArticlesPageError,
  selectArticlesPageView,
} from '../../model/selectors/select-articles-page-state';

import styles from './ArticlesPage.module.scss';

const ArticlePage: FC = memo(() => {
  const { t } = useTranslation('article');

  const { initState, fetchArticlesList, fetchNextArticlesPage } = useActionCreators(allActions);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      initState();
      fetchArticlesList({ page: 1 });
    }
  }, [fetchArticlesList, initState]);

  const articles = useAppSelector(selectArticlesPageInfo.selectAll);
  const isLoading = useAppSelector(selectArticlesPageIsLoading);
  const error = useAppSelector(selectArticlesPageError);
  const view = useAppSelector(selectArticlesPageView);

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
    <Page className={cn(styles['article-page'])}>
      <ArticleViewSwitcher view={view} />
      <ArticleList
        articles={articles}
        view={view}
        isLoading={isLoading}
        onIntersect={handleLoadNextPage}
      />
    </Page>
  );
});

export default withAsyncReducers(ArticlePage, {
  reducers: { articlesPageInfo: articlesPageReducer },
});
