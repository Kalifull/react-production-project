import storage from 'redux-persist/lib/storage';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import { persistReducer, type PersistConfig } from 'redux-persist';

import { type ScrollSchema, scrollRecoveryReducer } from '@/features/scroll-recovery';

import { type UserSchema, userReducer } from '@/entities/user';

import { api } from '@/shared/api';

import type { StateSchema } from './state-schema';

const authPersistConfig: PersistConfig<UserSchema> = {
  key: 'auth',
  storage,
  whitelist: ['authData'],
};

const scrollPersistConfig: PersistConfig<ScrollSchema> = {
  key: 'scroll',
  storage,
  whitelist: ['scroll'],
};

export const syncReducers: ReducersMapObject<StateSchema> = {
  scrollRecoveryInfo: persistReducer(scrollPersistConfig, scrollRecoveryReducer),
  userInfo: persistReducer(authPersistConfig, userReducer),
  [api.reducerPath]: api.reducer,
};
