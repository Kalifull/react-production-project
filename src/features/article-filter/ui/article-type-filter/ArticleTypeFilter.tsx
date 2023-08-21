import { useTranslation } from 'react-i18next';
import { FC, memo, useMemo } from 'react';

import { ArticleTypeEnum } from '@/entities/article';

import type { TabsOptions } from '@/shared/api';

import { Tabs } from '@/shared/ui';

import { cn } from '@/shared/lib';

interface ArticleTypeFilterProps {
  className?: string;
  type: ArticleTypeEnum;
  onChangeType: (type: ArticleTypeEnum) => void;
}

export const ArticleTypeFilter: FC<ArticleTypeFilterProps> = memo((props) => {
  const { className, type, onChangeType } = props;

  const { t } = useTranslation('article');

  const typeTabs = useMemo<TabsOptions<ArticleTypeEnum>[]>(
    () =>
      Object.values(ArticleTypeEnum).reduce(
        (acc: TabsOptions<ArticleTypeEnum>[], value) => [
          ...acc,
          { value, content: t(value, { ns: 'article' }) },
        ],
        []
      ),
    [t]
  );

  return (
    <Tabs<ArticleTypeEnum>
      className={cn('', {}, [className])}
      tabs={typeTabs}
      type={type}
      onClick={onChangeType}
    />
  );
});
