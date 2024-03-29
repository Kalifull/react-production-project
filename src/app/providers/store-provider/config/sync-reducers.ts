import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { ReducersMapObject } from '@reduxjs/toolkit';

import { scrollRecoveryReducer } from '@/features/scroll-recovery';

import { userReducer } from '@/entities/user';

import { api } from '@/shared/api';

import type { StateSchema } from './state-schema';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['authData'],
};

const scrollPersistConfig = {
  key: 'scroll',
  storage,
  whitelist: ['scroll'],
};

export const syncReducers: ReducersMapObject<StateSchema> = {
  scrollRecoveryInfo: persistReducer(scrollPersistConfig, scrollRecoveryReducer),
  userInfo: persistReducer(authPersistConfig, userReducer),
  [api.reducerPath]: api.reducer,
};
