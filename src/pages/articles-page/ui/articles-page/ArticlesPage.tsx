import { useTranslation } from 'react-i18next';
import { FC, memo, useCallback, useEffect } from 'react';

import { Page } from '@/widgets/page';

import { ArticleViewSwitcher, selectArticleView } from '@/features/article-view-switcher';

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

  const { initArticlesListData, fetchNextArticlesPage } = useActionCreators(allActions);

  const articles = useAppSelector(selectArticlesPageInfo.selectAll);
  const isLoading = useAppSelector(selectArticlesPageIsLoading);
  const error = useAppSelector(selectArticlesPageError);
  const view = useAppSelector(selectArticleView);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      initArticlesListData();
    }
  }, [initArticlesListData]);

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
      <ArticleViewSwitcher />
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
  removeAfterUnmount: false,
});
