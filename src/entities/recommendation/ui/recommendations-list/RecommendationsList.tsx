import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { TextSizeEnum } from '@/shared/api';

import { Text, VStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import {
  selectRecommendationsInfo,
  selectRecommendationsIsLoading,
} from '../../model/selectors/select-recommendations-state';
import { recommendationsReducer } from '../../model/slice/recommendations-slice';

import { ArticleList } from '../../../article';

import styles from './RecommendationsList.module.scss';

interface RecommendationsListProps {
  className?: string;
}

const RecommendationsList: FC<RecommendationsListProps> = memo(({ className }) => {
  const { t } = useTranslation('article');

  const { fetchRecommendations } = useActionCreators(allActions);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      fetchRecommendations();
    }
  }, [fetchRecommendations]);

  const recommendations = useAppSelector(selectRecommendationsInfo.selectAll);
  const isLoading = useAppSelector(selectRecommendationsIsLoading);

  return (
    <VStack
      className={cn('', {}, [className])}
      tag="section"
      aria-label="recommendations"
      align="center"
      gap="16"
      stretch
    >
      <Text size={TextSizeEnum.L} title={t('recommendations')} />
      <ArticleList
        className={cn(styles.recommendation)}
        articles={recommendations}
        view="tile"
        isLoading={isLoading}
        target="_blank"
        virtualized={false}
      />
    </VStack>
  );
});

export default withAsyncReducers(RecommendationsList, {
  reducers: { recommendationsInfo: recommendationsReducer },
});
