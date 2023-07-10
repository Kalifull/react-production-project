import type { Article } from './article.interface';

export interface ArticleSchema {
  article?: Article | null;
  isLoading: boolean;
  error?: string | null;
}

export type PayloadFetchArticleErrors = string | undefined;
