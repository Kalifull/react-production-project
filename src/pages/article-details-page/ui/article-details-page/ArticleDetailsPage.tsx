import { FC, memo } from 'react';

import { FormComments } from '@/widgets/form-comments';
import { Page } from '@/widgets/page';

import { ArticleDetails, selectArticleError } from '@/entities/article';
import { RecommendationsList } from '@/entities/recommendation';

import { VStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { useAppSelector } from '@/shared/lib/hooks';

import styles from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = memo(() => {
  const error = useAppSelector(selectArticleError);

  return (
    <Page className={cn(styles.article)}>
      <VStack tag="article" gap="16" stretch>
        <ArticleDetails />
        {!error && <RecommendationsList />}
        {!error && <FormComments />}
      </VStack>
    </Page>
  );
});

export default ArticleDetailsPage;
