import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { TextSizeEnum } from '@/shared/api';

import { Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import {
  selectRecommendationsInfo,
  selectRecommendationsIsLoading,
} from '../../model/selectors/select-recommendations-state';
import { recommendationsReducer } from '../../model/slice/recommendations-slice';

import { ArticleList, ArticleViewEnum } from '../../../article';

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
    <div className={cn(styles['recommendation-wrapper'], {}, [className])}>
      <Text size={TextSizeEnum.L} title={t('recommendations')} />
      <ArticleList
        className={cn(styles.recommendation)}
        articles={recommendations}
        view={ArticleViewEnum.TILE}
        isLoading={isLoading}
        target="_blank"
        virtualized={false}
      />
    </div>
  );
});

export default withAsyncReducers(RecommendationsList, {
  reducers: { recommendationsInfo: recommendationsReducer },
});
