import { ArticleTypeEnum } from '@/entities/article';

import { ArticleSortEnum, ArticleOrderEnum } from './article-filter.interface';

export interface ArticleFilterSchema {
  order: ArticleOrderEnum;
  sort: ArticleSortEnum;
  search: string;
  type: ArticleTypeEnum;
}

export interface PayloadArticleOrder {
  order: ArticleOrderEnum;
}

export interface PayloadArticleSort {
  sort: ArticleSortEnum;
}

export interface PayloadArticleSearch {
  search: string;
}

export interface PayloadArticleType {
  type: ArticleTypeEnum;
}
