import type { DeepPartial, Reducer } from '@reduxjs/toolkit';

import { loginReducer } from '@/features/user-auth';
import { formCommentReducer } from '@/features/send-form-comment';

import { articlesPageReducer } from '@/pages/articles-page';

import { articleSortingPanelReducer } from '@/widgets/article-sorting-panel';

import { articleReducer } from '@/entities/article';
import { commentsReducer } from '@/entities/comment';
import { profileReducer } from '@/entities/profile';
import { recommendationsReducer } from '@/entities/recommendation';

import type { StateSchema } from './state-schema';

export const asyncReducers: DeepPartial<Reducer<StateSchema>> = {
  articlesPageInfo: articlesPageReducer,
  articleSortingPanelInfo: articleSortingPanelReducer,
  formCommentInfo: formCommentReducer,
  loginFormInfo: loginReducer,
  articleInfo: articleReducer,
  commentsInfo: commentsReducer,
  profileInfo: profileReducer,
  recommendationsInfo: recommendationsReducer,
};
