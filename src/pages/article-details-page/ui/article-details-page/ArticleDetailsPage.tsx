import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleDetails, articleReducer } from '@/entities/article';
import { CommentList, commentsReducer } from '@/entities/comment';

import { Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import styles from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = memo(() => {
  const { t } = useTranslation('article');

  return (
    <div className={cn(styles.article)}>
      <ArticleDetails />
      <Text className={cn(styles.comments)} title={t('comments')} />
      <CommentList />
    </div>
  );
});

export default withAsyncReducers(ArticleDetailsPage, {
  reducers: { articleInfo: articleReducer, commentsInfo: commentsReducer },
});
