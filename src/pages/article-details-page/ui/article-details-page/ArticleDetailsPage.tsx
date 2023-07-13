import { FC, memo } from 'react';

import { CommentsDetails } from '@/widgets/comments-details';

import { ArticleDetails, articleReducer } from '@/entities/article';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import styles from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = memo(() => (
  <div className={cn(styles.article)}>
    <ArticleDetails />
    <CommentsDetails />
  </div>
));

export default withAsyncReducers(ArticleDetailsPage, {
  reducers: { articleInfo: articleReducer },
});
