import { type FC, type HTMLAttributeAnchorTarget, memo, useCallback, useRef } from 'react';
import { Virtuoso, VirtuosoGrid, type VirtuosoGridHandle } from 'react-virtuoso';
import { useTranslation } from 'react-i18next';

import { TextSizeEnum } from '@/shared/api';

import { HStack, Text, VStack } from '@/shared/ui';

import { cn, Mods } from '@/shared/lib';

import { useInView } from '@/shared/lib/hooks';

import { ArticleSkeletonList } from './ArticleSkeletonList';

import { ArticleItem } from '../article-item/ArticleItem';

import { Article, ArticleViewType } from '../../model/types/article.interface';

import styles from './ArticleList.module.scss';

interface FooterProps {
  context?: {
    view: ArticleViewType;
    isLoading?: boolean;
  };
}

const Footer: FC<FooterProps> = memo(({ context }) => {
  if (context) {
    const { view, isLoading } = context;

    const mods: Mods = {
      [styles['list-wrapper']]: view === 'list',
      [styles['tile-wrapper']]: view === 'tile',
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
  view: ArticleViewType;
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
    intersectionOptions: {
      threshold: 0.5,
    },
  });

  const renderArticle = useCallback(
    (index: number, article: Article) => (
      <ArticleItem
        ref={ref}
        className={cn(styles['list-wrapper'])}
        key={index}
        article={article}
        view={view}
        target={target}
      />
    ),
    [ref, view, target]
  );

  if (!isLoading && !articles.length) {
    return (
      <VStack
        className={cn(styles['article-wrapper'], {}, [className, styles[view]])}
        tag="article"
        align="stretch"
      >
        {Header && <Header />}
        <Text
          size={TextSizeEnum.L}
          title={t('articlesNotFound')}
          text={t('articlesNotFoundText')}
        />
      </VStack>
    );
  }

  if (!virtualized) {
    return (
      <HStack className={cn('', {}, [className, styles[view]])} gap="32" stretch>
        {articles.map((article, index) => renderArticle(index, article))}
        {isLoading && <ArticleSkeletonList view={view} />}
      </HStack>
    );
  }

  return (
    <VStack
      className={cn(styles['article-wrapper'], {}, [className, styles[view]])}
      tag="article"
      align="stretch"
    >
      {view === 'list' ? (
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
    </VStack>
  );
});

export default ArticleList;
