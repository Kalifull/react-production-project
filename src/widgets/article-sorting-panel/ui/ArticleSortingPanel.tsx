import { FC, memo } from 'react';

import { ArticleFilter } from '@/features/article-filter';
import { ArticleViewSwitcher } from '@/features/article-view-switcher';

import { cn } from '@/shared/lib';

import styles from './ArticleSortingPanel.module.scss';

interface ArticleSortingPanelProps {
  className?: string;
}

const ArticleSortingPanel: FC<ArticleSortingPanelProps> = memo(({ className }) => (
  <div className={cn(styles['panel-wrapper'], {}, [className])}>
    <ArticleFilter />
    <ArticleViewSwitcher />
  </div>
));

export default ArticleSortingPanel;
