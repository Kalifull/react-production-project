import { FC, memo } from 'react';

import { cn } from '@/shared/lib';

import { ArticleItem } from '../article-item/ArticleItem';
import { ArticleSkeletonItem } from '../article-item/ArticleSkeletonItem';

import type { Article } from '../../model/types/article.interface';
import { ArticleViewEnum } from '../../model/types/article.interface';

import styles from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleViewEnum;
}

const SKELETON_LIST_COUNT = 3;
const SKELETON_TILE_COUNT = 12;

const getSkeletonList = (view: ArticleViewEnum) =>
  [...new Array(view === ArticleViewEnum.LIST ? SKELETON_LIST_COUNT : SKELETON_TILE_COUNT)].map(
    (_, index) => <ArticleSkeletonItem className={cn(styles.item)} key={index} view={view} />
  );

const ArticleList: FC<ArticleListProps> = memo((props) => {
  const { className, articles, isLoading, view = ArticleViewEnum.TILE } = props;

  const renderArticle = (article: Article) => {
    return (
      <ArticleItem className={cn(styles.item)} key={article.id} article={article} view={view} />
    );
  };

  if (isLoading) {
    return <div className={cn('', {}, [className, styles[view]])}>{getSkeletonList(view)}</div>;
  }

  return (
    <div className={cn('', {}, [className, styles[view]])}>
      {articles.length ? articles.map(renderArticle) : null}
    </div>
  );
});

export default ArticleList;
