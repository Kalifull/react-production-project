import { FC, memo } from 'react';

import { ArticleList, ArticleViewEnum } from '@/entities/article';

import { cn } from '@/shared/lib';

import styles from './ArticlesPage.module.scss';

const ArticlePage: FC = memo(() => (
  <div className={cn(styles['article-page'])}>
    <ArticleList articles={[]} isLoading={false} view={ArticleViewEnum.TILE} />
  </div>
));

export default ArticlePage;
