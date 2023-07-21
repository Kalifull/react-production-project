import { EntityState } from '@reduxjs/toolkit';

import type { Article } from '@/entities/article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string | null;
  page: number;
  hasMore: boolean;
}

export type PayloadPage = {
  page: number;
};

export type PayloadFetchArticlesError = string | undefined;
