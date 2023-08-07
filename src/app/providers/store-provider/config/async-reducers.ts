import { DeepPartial, Reducer } from '@reduxjs/toolkit';

import { loginReducer } from '@/features/user-auth';
import { articleFilterReducer } from '@/features/article-filter';
import { articleViewReducer } from '@/features/article-view-switcher';
import { formCommentReducer } from '@/features/send-form-comment';

import { articlesPageReducer } from '@/pages/articles-page';

import { articleReducer } from '@/entities/article';
import { commentsReducer } from '@/entities/comment';
import { profileReducer } from '@/entities/profile';
import { recommendationsReducer } from '@/entities/recommendation';

import type { StateSchema } from './state-schema';

export const asyncReducers: DeepPartial<Reducer<StateSchema>> = {
  articlesPageInfo: articlesPageReducer,
  articleFilterInfo: articleFilterReducer,
  articleViewInfo: articleViewReducer,
  formCommentInfo: formCommentReducer,
  loginFormInfo: loginReducer,
  articleInfo: articleReducer,
  commentsInfo: commentsReducer,
  profileInfo: profileReducer,
  recommendationsInfo: recommendationsReducer,
};
