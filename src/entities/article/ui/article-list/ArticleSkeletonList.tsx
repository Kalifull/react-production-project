import { FC } from 'react';

import { cn } from '@/shared/lib';

import { ArticleSkeletonItem } from '../article-item/ArticleSkeletonItem';

import { ArticleViewEnum } from '../../model/types/article.interface';

interface ArticleSkeletonListProps {
  className?: string;
  view: ArticleViewEnum;
}

const SKELETON_LIST_COUNT = 8;
const SKELETON_TILE_COUNT = 12;

export const ArticleSkeletonList: FC<ArticleSkeletonListProps> = ({ className, view }) => (
  <>
    {[...new Array(view === ArticleViewEnum.LIST ? SKELETON_LIST_COUNT : SKELETON_TILE_COUNT)].map(
      (_, index) => (
        <ArticleSkeletonItem className={cn('', {}, [className])} key={index} view={view} />
      )
    )}
  </>
);
