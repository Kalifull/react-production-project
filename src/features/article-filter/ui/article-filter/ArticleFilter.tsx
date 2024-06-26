import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleTypeEnum } from '@/entities/article';

import { Card, Input, VStack, Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import {
  actionsCreators,
  useActionCreators,
  useAppSelector,
  useDebounceFn,
} from '@/shared/lib/hooks';

import { ArticleSortFilter } from '../article-sort-filter/ArticleSortFilter';
import { ArticleTypeFilter } from '../article-type-filter/ArticleTypeFilter';

import {
  selectArticleSort,
  selectArticleOrder,
  selectArticleSearch,
  selectArticleType,
} from '../../model/selectors/select-article-filter-state';
import { ArticleSortEnum, ArticleOrderEnum } from '../../model/constants/const-article-filter';

import styles from './ArticleFilter.module.scss';

interface ArticleFilterProps {
  className?: string;
}

const ArticleFilter: FC<ArticleFilterProps> = memo(({ className }) => {
  const { t } = useTranslation('article');

  const {
    setPage,
    setArticleSort,
    setArticleOrder,
    setArticleSearch,
    setArticleType,
    fetchArticlesListData,
  } = useActionCreators(actionsCreators);

  const sort = useAppSelector(selectArticleSort);
  const order = useAppSelector(selectArticleOrder);
  const search = useAppSelector(selectArticleSearch);
  const type = useAppSelector(selectArticleType);

  const fetchData = useCallback(
    () => fetchArticlesListData({ replace: true }),
    [fetchArticlesListData]
  );

  const debouncedFetchData = useDebounceFn(fetchData, { delay: 250 });

  const handleChangeSort = useCallback(
    (articleSort: ArticleSortEnum) => {
      setArticleSort({ sort: articleSort });
      setPage({ page: 1 });
      fetchData();
    },
    [fetchData, setArticleSort, setPage]
  );

  const handleChangeOrder = useCallback(
    (articleOrder: ArticleOrderEnum) => {
      setArticleOrder({ order: articleOrder });
      setPage({ page: 1 });
      fetchData();
    },
    [fetchData, setArticleOrder, setPage]
  );

  const handleChangeSearch = useCallback(
    (articleSearch: string) => {
      setArticleSearch({ search: articleSearch });
      setPage({ page: 1 });
      debouncedFetchData();
    },
    [debouncedFetchData, setArticleSearch, setPage]
  );

  const handleChangeType = useCallback(
    (articleType: ArticleTypeEnum) => {
      if (articleType !== type) {
        setArticleType({ type: articleType });
        setPage({ page: 1 });
        fetchData();
      }
    },
    [fetchData, setArticleType, setPage, type]
  );

  return (
    <VStack className={cn('', {}, [className])} gap="16" role="search" stretch>
      <Card className={cn(styles.search)}>
        <Input placeholder={t('search')} value={search} onChange={handleChangeSearch} />
      </Card>
      <ArticleSortFilter
        sort={sort}
        order={order}
        onChangeSort={handleChangeSort}
        onChangeOrder={handleChangeOrder}
      />
      <Text title={t('categories')} id="tabs-label" />
      <ArticleTypeFilter type={type} onChangeType={handleChangeType} />
    </VStack>
  );
});

export default ArticleFilter;
