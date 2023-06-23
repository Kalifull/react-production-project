import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/user';

import type { StateSchema } from './state-schema';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['authData'],
};

export const syncReducers: ReducersMapObject<StateSchema> = {
  userInfo: persistReducer(authPersistConfig, userReducer),
};
