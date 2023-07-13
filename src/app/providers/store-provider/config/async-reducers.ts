import { DeepPartial, Reducer } from '@reduxjs/toolkit';

import { loginReducer } from '@/features/user-auth';
import { formCommentReducer } from '@/features/send-form-comment';

import { articleReducer } from '@/entities/article';
import { commentsReducer } from '@/entities/comment';
import { profileReducer } from '@/entities/profile';

import type { StateSchema } from './state-schema';

export const asyncReducers: DeepPartial<Reducer<StateSchema>> = {
  loginFormInfo: loginReducer,
  formCommentInfo: formCommentReducer,
  articleInfo: articleReducer,
  commentsInfo: commentsReducer,
  profileInfo: profileReducer,
};
