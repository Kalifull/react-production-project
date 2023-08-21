import type { ArticleFilterSchema } from '@/features/article-filter';
import type { ArticleViewSchema } from '@/features/article-view-switcher';

export interface ArticleSortingPanelSchema {
  articleFilterInfo: ArticleFilterSchema;
  articleViewInfo: ArticleViewSchema;
}
