import { FC, memo, useCallback } from 'react';

import { cn } from '@/shared/lib';

import { useInView } from '@/shared/lib/hooks';

import { ArticleSkeletonList } from './ArticleSkeletonList';

import { ArticleItem } from '../article-item/ArticleItem';

import type { Article } from '../../model/types/article.interface';

import { ArticleViewEnum } from '../../model/types/article.interface';

import styles from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  view: ArticleViewEnum;
  isLoading?: boolean;
  onIntersect?: () => void;
}

const ArticleList: FC<ArticleListProps> = memo((props) => {
  const { className, articles, view, isLoading, onIntersect } = props;

  const { ref } = useInView({
    triggerOnce: true,
    callback: onIntersect,
    options: {
      threshold: 0.5,
    },
  });

  const renderArticle = useCallback(
    (article: Article) => {
      return (
        <ArticleItem
          ref={ref}
          className={cn(styles.item)}
          key={article.id}
          article={article}
          view={view}
        />
      );
    },
    [ref, view]
  );

  return (
    <div className={cn('', {}, [className, styles[view]])}>
      {articles.length ? articles.map(renderArticle) : null}
      {isLoading && <ArticleSkeletonList className={cn(styles.item)} view={view} />}
    </div>
  );
});

export default ArticleList;
