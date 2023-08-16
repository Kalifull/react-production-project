import { FC, HTMLAttributeAnchorTarget, memo, useCallback, useRef } from 'react';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { useTranslation } from 'react-i18next';

import { TextSizeEnum } from '@/shared/api';

import { Text } from '@/shared/ui';

import { cn, Mods } from '@/shared/lib';

import { useInView } from '@/shared/lib/hooks';

import { ArticleSkeletonList } from './ArticleSkeletonList';

import { ArticleItem } from '../article-item/ArticleItem';

import { Article, ArticleViewEnum } from '../../model/types/article.interface';

import styles from './ArticleList.module.scss';

interface FooterProps {
  context?: {
    view: ArticleViewEnum;
    isLoading?: boolean;
  };
}

const Footer: FC<FooterProps> = memo(({ context }) => {
  if (context) {
    const { view, isLoading } = context;

    const mods: Mods = {
      [styles['list-wrapper']]: view === ArticleViewEnum.LIST,
      [styles['tile-wrapper']]: view === ArticleViewEnum.TILE,
    };

    return isLoading ? (
      <div className={cn('', mods)}>
        <ArticleSkeletonList view={view} />
      </div>
    ) : null;
  }

  return null;
});

interface ArticleListProps {
  className?: string;
  articles: Article[];
  view: ArticleViewEnum;
  isLoading?: boolean;
  Header?: FC;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
  onIntersect?: () => void;
}

const ArticleList: FC<ArticleListProps> = memo((props) => {
  const {
    className,
    articles,
    view,
    Header,
    isLoading,
    target,
    virtualized = true,
    onIntersect,
  } = props;

  const { t } = useTranslation('article');

  const virtuosoGridRef = useRef<VirtuosoGridHandle | null>(null);

  const { ref } = useInView<HTMLDivElement>({
    triggerOnce: true,
    options: {
      threshold: 0.5,
    },
  });

  const renderArticle = useCallback(
    (index: number, article: Article) => {
      return (
        <ArticleItem
          ref={ref}
          className={cn(styles['list-wrapper'])}
          key={index}
          article={article}
          view={view}
          target={target}
        />
      );
    },
    [ref, view, target]
  );

  if (!isLoading && !articles.length) {
    return <Text size={TextSizeEnum.L} title={t('articlesNotFound')} />;
  }

  if (!virtualized) {
    return (
      <div className={cn('', {}, [className, styles[view]])}>
        {articles.map((article, index) => renderArticle(index, article))}
        {isLoading && <ArticleSkeletonList view={view} />}
      </div>
    );
  }

  return (
    <div className={cn(styles['article-wrapper'], {}, [className, styles[view]])}>
      {view === ArticleViewEnum.LIST ? (
        <Virtuoso
          context={{ view, isLoading }}
          data={articles}
          itemContent={renderArticle}
          endReached={onIntersect}
          components={{ Header, Footer }}
        />
      ) : (
        <VirtuosoGrid
          ref={virtuosoGridRef}
          listClassName={cn(styles['tile-wrapper'])}
          context={{ view, isLoading }}
          data={articles}
          totalCount={articles.length}
          itemContent={renderArticle}
          endReached={onIntersect}
          components={{ Header, Footer }}
        />
      )}
    </div>
  );
});

export default ArticleList;
