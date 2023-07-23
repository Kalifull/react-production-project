import { FC, ForwardedRef, forwardRef, memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TextAlignEnum } from '@/shared/api';

import { Text, Icon, Card, Avatar, Button } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { useCombinedRef, useHover } from '@/shared/lib/hooks';

import EyeIcon from '@/shared/assets/icons/eye.svg';

import { routesPaths } from '@/shared/config';

import { ArticleTextBlock } from '../article-block/article-text-block/ArticleTextBlock';
import {
  Article,
  TextBlock,
  ArticleViewEnum,
  ArticleBlockTypeEnum,
} from '../../model/types/article.interface';

import styles from './ArticleItem.module.scss';

interface ArticleItemProps {
  className?: string;
  article: Article;
  view: ArticleViewEnum;
  ref?: ForwardedRef<HTMLDivElement>;
}

export const ArticleItem: FC<ArticleItemProps> = memo(
  forwardRef((props, ref) => {
    const { className, article, view } = props;

    const navigate = useNavigate();
    const { t } = useTranslation('article');

    const { ref: localRef } = useHover<HTMLDivElement>();
    const combinedRef = useCombinedRef(ref, localRef);

    const handleOpenArticle = useCallback(() => {
      navigate(`${routesPaths['article-details']}${article.id}`);
    }, [article.id, navigate]);

    const textBlock = useMemo(() => {
      const block = article.blocks.find(
        ({ type }) => type === ArticleBlockTypeEnum.TEXT
      ) as TextBlock;

      return block;
    }, [article.blocks]);

    return view === ArticleViewEnum.LIST ? (
      <Card ref={combinedRef} className={cn('', {}, [className, styles[view]])}>
        <div className={cn(styles.header)}>
          <Avatar src={article.user.avatar} size={30} />
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
          <Button onClick={handleOpenArticle}>{t('read')}</Button>
          <Text className={cn(styles.views)} text={String(article.views)} />
          <Icon className={cn(styles.icon)} Svg={EyeIcon} />
        </footer>
      </Card>
    ) : (
      <Card
        ref={combinedRef}
        onClick={handleOpenArticle}
        className={cn('', {}, [className, styles[view]])}
      >
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
    );
  })
);
