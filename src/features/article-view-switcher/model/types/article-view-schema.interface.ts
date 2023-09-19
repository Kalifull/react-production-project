import type { ArticleViewType } from '@/entities/article';

export interface ArticleViewSchema {
  view: ArticleViewType;
  limit?: number;
  _isInitialized: boolean;
}

export interface PayloadView {
  view: ArticleViewType;
}
