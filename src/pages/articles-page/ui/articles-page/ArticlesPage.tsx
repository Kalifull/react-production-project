import { useTranslation } from 'react-i18next';
import { FC, memo, useEffect } from 'react';

import { ArticleViewSwitcher } from '@/features/article-view-switcher';

import { ArticleList } from '@/entities/article';

import { TextVariantEnum } from '@/shared/api';

import { Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import { articlesPageReducer } from '../../model/slice/articles-page-slice';

import {
  selectArticlesPageError,
  selectArticlesPageInfo,
  selectArticlesPageIsLoading,
  selectArticlesPageView,
} from '../../model/selectors/select-articles-page-state';

import styles from './ArticlesPage.module.scss';

const ArticlePage: FC = memo(() => {
  const { t } = useTranslation('article');

  const { fetchArticlesList } = useActionCreators(allActions);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      fetchArticlesList();
    }
  }, [fetchArticlesList]);

  const articles = useAppSelector(selectArticlesPageInfo.selectAll);
  const isLoading = useAppSelector(selectArticlesPageIsLoading);
  const error = useAppSelector(selectArticlesPageError);
  const view = useAppSelector(selectArticlesPageView);

  if (error) {
    return (
      <div className={cn(styles['article-page'])}>
        <Text variant={TextVariantEnum.ERROR} title={t('failedLoadArticles')} text={t(error)} />
      </div>
    );
  }

  return (
    <div className={cn(styles['article-page'])}>
      <ArticleViewSwitcher view={view} />
      <ArticleList articles={articles} isLoading={isLoading} view={view} />
    </div>
  );
});

export default withAsyncReducers(ArticlePage, {
  reducers: { articlesPageInfo: articlesPageReducer },
});
