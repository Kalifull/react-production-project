import { type FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { SelectOptions } from '@/shared/api';

import { HStack, Select } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { ArticleOrderEnum, ArticleSortEnum } from '../../model/constants/const-article-filter';

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
    <HStack className={cn('', {}, [className])} gap="16" stretch>
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
    </HStack>
  );
});
