import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { PersistPartial } from 'redux-persist/es/persistReducer';

import type { ArticlesPageSchema } from '@/pages/articles-page';

import type { ArticleSortingPanelSchema } from '@/widgets/article-sorting-panel';

import type { ScrollSchema } from '@/features/scroll-recovery';
import type { FormCommentSchema } from '@/features/send-form-comment';
import type { LoginSchema } from '@/features/user-auth';

import type { ArticleSchema } from '@/entities/article';
import type { CommentsSchema } from '@/entities/comment';
import type { ProfileSchema } from '@/entities/profile';
import type { RecommendationsSchema } from '@/entities/recommendation';
import type { UserSchema } from '@/entities/user';

export interface StateSchema {
  articlesPageInfo?: ArticlesPageSchema;
  articleSortingPanelInfo?: ArticleSortingPanelSchema;
  scrollRecoveryInfo: ScrollSchema & PersistPartial;
  formCommentInfo?: FormCommentSchema;
  loginFormInfo?: LoginSchema;
  articleInfo?: ArticleSchema;
  commentsInfo?: CommentsSchema;
  profileInfo?: ProfileSchema;
  recommendationsInfo?: RecommendationsSchema;
  userInfo: UserSchema & PersistPartial;
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
