import { FC, memo } from 'react';

import { ArticleFilter } from '@/features/article-filter';
import { ArticleViewSwitcher } from '@/features/article-view-switcher';

import { HStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import styles from './ArticleSortingPanel.module.scss';

interface ArticleSortingPanelProps {
  className?: string;
}

const ArticleSortingPanel: FC<ArticleSortingPanelProps> = memo(({ className }) => (
  <HStack
    className={cn(styles['panel-wrapper'], {}, [className])}
    tag="section"
    aria-label="sorting-panel"
    gap="32"
    justify="between"
    align="start"
  >
    <ArticleFilter />
    <ArticleViewSwitcher />
  </HStack>
));

export default ArticleSortingPanel;
