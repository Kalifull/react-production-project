import { ArticleViewEnum } from '@/entities/article';

export interface ArticleViewSchema {
  view: ArticleViewEnum;
  limit?: number;
  _isInitialized: boolean;
}

export interface PayloadView {
  view: ArticleViewEnum;
}
