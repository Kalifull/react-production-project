import { FC, ForwardedRef, HTMLAttributeAnchorTarget, forwardRef, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { TextAlignEnum } from '@/shared/api';

import { routesPaths } from '@/shared/config';

import { Text, Icon, Card, Avatar, Button, AppLink } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { useCombinedRef, useHover } from '@/shared/lib/hooks';

import EyeIcon from '@/shared/assets/icons/eye.svg';

import { ArticleTextBlock } from '../article-block/article-text-block/ArticleTextBlock';

import { ArticleBlockTypeEnum } from '../../model/const/const-article';
import type { Article, TextBlock, ArticleViewType } from '../../model/types/article.interface';

import styles from './ArticleItem.module.scss';

interface ArticleItemProps {
  className?: string;
  article: Article;
  view: ArticleViewType;
  target?: HTMLAttributeAnchorTarget;
  ref?: ForwardedRef<HTMLDivElement>;
}

export const ArticleItem: FC<ArticleItemProps> = memo(
  forwardRef((props, ref) => {
    const { className, article, view, target } = props;

    const { t } = useTranslation('article');

    const { ref: localRef } = useHover<HTMLDivElement>();
    const combinedRef = useCombinedRef(ref, localRef);

    const textBlock = useMemo(
      () => article.blocks.find(({ type }) => type === ArticleBlockTypeEnum.TEXT) as TextBlock,
      [article.blocks]
    );

    return view === 'list' ? (
      <Card ref={combinedRef} className={cn('', {}, [className, styles[view]])}>
        <div className={cn(styles.header)}>
          <Avatar src={article.user.avatar} size={30} alt={article.title} />
          <Text className={cn(styles.username)} text={article.user.username} />
          <Text className={cn(styles.date)} text={article.createdAt} />
        </div>

        <Text className={cn(styles.title)} text={article.title} align={TextAlignEnum.LEFT} />
        <Text
          className={cn(styles.types)}
          text={article.type.join(', ')}
          align={TextAlignEnum.LEFT}
        />
        <img className={cn(styles.image)} src={article.img} alt={article.title} />

        {textBlock && <ArticleTextBlock className={cn(styles.block)} block={textBlock} />}

        <footer className={cn(styles.footer)}>
          <AppLink to={`${routesPaths['article-details']}${article.id}`}>
            <Button>{t('read')}</Button>
          </AppLink>
          <Text className={cn(styles.views)} text={String(article.views)} />
          <Icon className={cn(styles.icon)} Svg={EyeIcon} />
        </footer>
      </Card>
    ) : (
      <AppLink to={`${routesPaths['article-details']}${article.id}`} target={target}>
        <Card ref={combinedRef} className={cn('', {}, [className, styles[view]])}>
          <div className={cn(styles['image-wrapper'])}>
            <img className={cn(styles.image)} src={article.img} alt={article.title} />
            <Text className={cn(styles.date)} text={article.createdAt} />
          </div>

          <div className={cn(styles['info-wrapper'])}>
            <Text className={cn(styles.types)} text={article.type.join(', ')} />
            <Text className={cn(styles.views)} text={String(article.views)} />
            <Icon Svg={EyeIcon} />
          </div>

          <Text className={cn(styles.title)} text={article.title} />
        </Card>
      </AppLink>
    );
  })
);
