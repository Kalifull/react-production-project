import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/user';

import { StateSchema } from './state-schema';

const rootReducer = combineReducers({
  userInfo: userReducer,
});

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
