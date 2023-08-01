import { useTranslation } from 'react-i18next';
import { FC, memo, useCallback, useMemo } from 'react';

import { ArticleTypeEnum } from '@/entities/article';

import type { SelectOptions } from '@/shared/api';

import { Card, Input, Select } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { allActions, useActionCreators, useAppSelector, useDebounceFn } from '@/shared/lib/hooks';

import { ArticleTypeFilter } from '../article-type-filter/ArticleTypeFilter';

import {
  selectArticleSort,
  selectArticleOrder,
  selectArticleSearch,
  selectArticleType,
} from '../../model/selectors/select-article-filter-state';
import { articleFilterReducer } from '../../model/slice/article-filter-slice';
import { ArticleSortEnum, ArticleOrderEnum } from '../../model/types/article-filter.interface';

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
    fetchArticlesList,
  } = useActionCreators(allActions);

  const sort = useAppSelector(selectArticleSort);
  const order = useAppSelector(selectArticleOrder);
  const search = useAppSelector(selectArticleSearch);
  const type = useAppSelector(selectArticleType);

  const fetchData = useCallback(() => {
    fetchArticlesList({ replace: true });
  }, [fetchArticlesList]);

  const debouncedFetchData = useDebounceFn(fetchData, { delay: 250 });

  const sortOptions = useMemo<SelectOptions<ArticleSortEnum>[]>(
    () =>
      Object.values(ArticleSortEnum).reduce(
        (acc: SelectOptions<ArticleSortEnum>[], value) => [
          ...acc,
          { optionValue: value, content: t(value, { ns: 'article' }) },
        ],
        []
      ),
    [t]
  );

  const orderOptions = useMemo<SelectOptions<ArticleOrderEnum>[]>(
    () =>
      Object.values(ArticleOrderEnum).reduce(
        (acc: SelectOptions<ArticleOrderEnum>[], value) => [
          ...acc,
          { optionValue: value, content: t(value, { ns: 'article' }) },
        ],
        []
      ),
    [t]
  );

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
    <div className={cn(styles.filters, {}, [className])}>
      <Card className={cn(styles.search)}>
        <Input placeholder={t('search')} value={search} onChange={handleChangeSearch} />
      </Card>
      <div className={cn(styles['select-wrapper'])}>
        <Select<ArticleSortEnum>
          label={t('sortBy')}
          options={sortOptions}
          value={sort}
          onChange={handleChangeSort}
        />
        <Select<ArticleOrderEnum>
          label={t('sortBy')}
          options={orderOptions}
          value={order}
          onChange={handleChangeOrder}
        />
      </div>
      <ArticleTypeFilter type={type} onChangeType={handleChangeType} />
    </div>
  );
});

export default withAsyncReducers(ArticleFilter, {
  reducers: { articleFilterInfo: articleFilterReducer },
});
