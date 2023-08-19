import { useTranslation } from 'react-i18next';
import { FC, memo, useMemo } from 'react';

import type { SelectOptions } from '@/shared/api';

import { Select } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { ArticleOrderEnum, ArticleSortEnum } from '../../model/types/article-filter.interface';

import styles from './ArticleSortFilter.module.scss';

interface ArticleSortFilterProps {
  className?: string;
  sort: ArticleSortEnum;
  order: ArticleOrderEnum;
  onChangeSort: (articleSort: ArticleSortEnum) => void;
  onChangeOrder: (articleOrder: ArticleOrderEnum) => void;
}

export const ArticleSortFilter: FC<ArticleSortFilterProps> = memo((props) => {
  const { className, sort, order, onChangeSort, onChangeOrder } = props;

  const { t } = useTranslation('article');

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

  return (
    <div className={cn(styles['select-wrapper'], {}, [className])}>
      <Select<ArticleSortEnum>
        label={t('sortBy')}
        options={sortOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<ArticleOrderEnum>
        label={t('sortBy')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
