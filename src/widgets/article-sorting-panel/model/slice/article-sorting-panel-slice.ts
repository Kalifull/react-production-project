import { combineReducers } from '@reduxjs/toolkit';

import { articleFilterReducer } from '@/features/article-filter';
import { articleViewReducer } from '@/features/article-view-switcher';

import type { ArticleSortingPanelSchema } from '../types/article-sorting-panel-schema.interface';

export const articleSortingPanelReducer = combineReducers<ArticleSortingPanelSchema>({
  articleFilterInfo: articleFilterReducer,
  articleViewInfo: articleViewReducer,
});
