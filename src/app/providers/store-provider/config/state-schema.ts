import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { PersistPartial } from 'redux-persist/es/persistReducer';

import type { LoginSchema } from '@/features/user-auth';
import type { FormCommentSchema } from '@/features/send-form-comment';

import type { UserSchema } from '@/entities/user';
import type { ArticleSchema } from '@/entities/article';
import type { CommentsSchema } from '@/entities/comment';
import type { ProfileSchema } from '@/entities/profile';

export interface StateSchema {
  userInfo: UserSchema & PersistPartial;
  formCommentInfo?: FormCommentSchema;
  loginFormInfo?: LoginSchema;
  articleInfo?: ArticleSchema;
  commentsInfo?: CommentsSchema;
  profileInfo?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
}
