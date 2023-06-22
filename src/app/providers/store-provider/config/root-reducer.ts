import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

import { loginReducer } from '@/features/user-auth';

import { userReducer } from '@/entities/user';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['authData'],
};

export const rootReducer = combineReducers({
  userInfo: persistReducer(authPersistConfig, userReducer),
  loginFormInfo: loginReducer,
});
