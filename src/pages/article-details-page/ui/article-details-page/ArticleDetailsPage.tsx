import { FC, memo } from 'react';

import { FormComments } from '@/widgets/form-comments';
import { Page } from '@/widgets/page';

import { ArticleDetails, selectArticleError } from '@/entities/article';

import { cn } from '@/shared/lib';

import { useAppSelector } from '@/shared/lib/hooks';

import styles from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = memo(() => {
  const error = useAppSelector(selectArticleError);

  return (
    <Page className={cn(styles.article)}>
      <ArticleDetails />
      {!error && <FormComments />}
    </Page>
  );
});

export default ArticleDetailsPage;
