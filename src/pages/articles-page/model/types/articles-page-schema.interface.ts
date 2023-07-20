import { EntityState } from '@reduxjs/toolkit';

import type { Article, ArticleViewEnum } from '@/entities/article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string | null;
  view: ArticleViewEnum;
  page: number;
  limit?: number;
  hasMore: boolean;
}

export interface PayloadView {
  view: ArticleViewEnum;
}

export type PayloadPage = {
  page: number;
};

export type PayloadFetchArticlesError = string | undefined;
