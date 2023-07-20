import { FC, memo } from 'react';

import { CommentsDetails } from '@/widgets/comments-details';

import { ArticleDetails, selectArticleError } from '@/entities/article';

import { Page } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { useAppSelector } from '@/shared/lib/hooks';

import styles from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = memo(() => {
  const error = useAppSelector(selectArticleError);

  return (
    <Page className={cn(styles.article)}>
      <ArticleDetails />
      {!error && <CommentsDetails />}
    </Page>
  );
});

export default ArticleDetailsPage;
