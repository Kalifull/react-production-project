import { useTranslation } from 'react-i18next';
import { FC, memo, useCallback } from 'react';

import { ArticleSortingPanel, articleSortingPanelReducer } from '@/widgets/article-sorting-panel';
import { Page } from '@/widgets/page';

import { selectArticleView } from '@/features/article-view-switcher';

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

import styles from './ArticleInfiniteList.module.scss';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = withAsyncReducers(
  memo(({ className }) => {
    const { t } = useTranslation('article');

    const { fetchNextArticlesPage } = useActionCreators(allActions);

    const articles = useAppSelector(selectArticlesPageInfo.selectAll);
    const isLoading = useAppSelector(selectArticlesPageIsLoading);
    const error = useAppSelector(selectArticlesPageError);
    const view = useAppSelector(selectArticleView);

    const handleLoadNextPage = useCallback(() => {
      fetchNextArticlesPage();
    }, [fetchNextArticlesPage]);

    if (error) {
      return (
        <Page className={cn(styles['article-page'], {}, [className])}>
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
  }),
  {
    reducers: { articleSortingPanelInfo: articleSortingPanelReducer },
    removeAfterUnmount: false,
  }
);
