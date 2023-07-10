import { FC, memo, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TextAlignEnum, TextSizeEnum, TextVariantEnum } from '@/shared/api';

import { Avatar, Skeleton, Text, Icon } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';

import {
  selectArticleData,
  selectArticleError,
  selectArticleIsLoading,
} from '../../model/selectors/select-article-state';
import { articleReducer } from '../../model/slice/article-slice';
import type { ArticleBlock } from '../../model/types/article.interface';

import { mappingArticlesBlock } from '../article-block';

import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

type PageParams = {
  id: string;
};

const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className }) => {
  const { t } = useTranslation('article');
  const { id } = useParams<PageParams>();

  const { fetchArticleById } = useActionCreators(allActions);

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook') {
      fetchArticleById(id);
    }
  }, [fetchArticleById, id]);

  const article = useAppSelector(selectArticleData);
  const isLoading = useAppSelector(selectArticleIsLoading);
  const error = useAppSelector(selectArticleError);

  const renderArticlesBlock = useCallback((block: ArticleBlock) => {
    return mappingArticlesBlock(block)[block.type];
  }, []);

  if (isLoading) {
    return (
      <div className={cn(styles['article-details'], {}, [className])}>
        <Skeleton className={cn(styles.avatar)} width={200} height={200} border="50%" />
        <Skeleton className={cn(styles.title)} width={670} height={32} />
        <Skeleton className={cn(styles.skeleton)} width={400} height={32} />
        <Skeleton className={cn(styles.skeleton)} width="100%" height={230} />
        <Skeleton className={cn(styles.skeleton)} width="100%" height={230} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(styles['article-details'], {}, [className])}>
        <Text variant={TextVariantEnum.ERROR} title={t('articleNotFound')} text={t(error)} />
      </div>
    );
  }

  return (
    <div className={cn(styles['article-details'])}>
      <div className={cn(styles['avatar-wrapper'])}>
        <Avatar className={cn(styles.avatar)} src={article?.img} size={200} alt={article?.title} />
      </div>

      <Text
        className={cn(styles.title)}
        title={article?.title}
        text={article?.subtitle}
        size={TextSizeEnum.L}
        align={TextAlignEnum.LEFT}
      />

      <div className={cn(styles['article-info'])}>
        <Icon className={cn(styles.icon)} Svg={EyeIcon} />
        <Text text={String(article?.views)} />
      </div>

      <div className={cn(styles['article-info'])}>
        <Icon className={cn(styles.icon)} Svg={CalendarIcon} />
        <Text text={article?.createdAt} />
      </div>
      {article?.blocks.map(renderArticlesBlock)}
    </div>
  );
});

export default withAsyncReducers(ArticleDetails, { reducers: { articleInfo: articleReducer } });
