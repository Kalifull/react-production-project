import { type FC, memo, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ButtonVariantEnum, TextAlignEnum, TextSizeEnum, TextVariantEnum } from '@/shared/api';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';

import { routesPaths } from '@/shared/config';

import { Avatar, Skeleton, Text, Icon, Button, HStack, VStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { actionsCreators, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import { mappingArticlesBlock } from '../article-block';

import {
  selectArticleData,
  selectArticleError,
  selectArticleIsLoading,
} from '../../model/selectors/select-article-state';
import { articleReducer } from '../../model/slice/article-slice';
import type { ArticleBlock } from '../../model/types/article.interface';

import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

type PageParams = {
  id: string;
};

const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className }) => {
  const navigate = useNavigate();
  const { t } = useTranslation('article');
  const { id } = useParams<PageParams>();

  const { fetchArticleById } = useActionCreators(actionsCreators);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      fetchArticleById(id);
    }
  }, [fetchArticleById, id]);

  const article = useAppSelector(selectArticleData);
  const isLoading = useAppSelector(selectArticleIsLoading);
  const error = useAppSelector(selectArticleError);

  const handleBackClick = useCallback(() => navigate(routesPaths.articles), [navigate]);

  const renderArticlesBlock = useCallback(
    (block: ArticleBlock) => mappingArticlesBlock(block)[block.type],
    []
  );

  if (isLoading) {
    return (
      <VStack className={cn(styles['article-details'], {}, [className])} gap="16" stretch>
        <Skeleton className={cn(styles.avatar)} width={200} height={200} border="50%" />
        <Skeleton width={670} height={32} />
        <Skeleton width={400} height={32} />
        <Skeleton width="100%" height={230} />
        <Skeleton width="100%" height={230} />
      </VStack>
    );
  }

  if (error) {
    return (
      <VStack
        className={cn(styles['article-details'], {}, [className])}
        justify="center"
        align="center"
        gap="16"
        stretch
      >
        <Text variant={TextVariantEnum.ERROR} title={t('articleNotFound')} text={t(error)} />
        <Button variant={ButtonVariantEnum.OUTLINE_RED} onClick={handleBackClick}>
          {t('back')}
        </Button>
      </VStack>
    );
  }

  return (
    <VStack
      className={cn(styles['article-details'])}
      tag="section"
      aria-label="article"
      gap="16"
      stretch
    >
      <Button onClick={handleBackClick}>{t('back')}</Button>
      <HStack justify="center" stretch>
        <Avatar className={cn(styles.avatar)} src={article?.img} size={200} alt={article?.title} />
      </HStack>
      <VStack gap="4" stretch>
        <Text
          title={article?.title}
          text={article?.subtitle}
          size={TextSizeEnum.L}
          align={TextAlignEnum.LEFT}
        />
        <HStack gap="8">
          <Icon Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </HStack>
        <HStack gap="8">
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderArticlesBlock)}
    </VStack>
  );
});

export default withAsyncReducers(ArticleDetails, {
  reducers: { articleInfo: articleReducer },
});
