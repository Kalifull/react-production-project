import {
  type CombinedState,
  type Reducer,
  type ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { api, apiInstance } from '@/shared/api';

import { createReducerManager } from './reducer-manager';

import { syncReducers } from './sync-reducers';

import type { StateSchema, StoreWithReducerManager, ThunkExtraArgs } from './state-schema';

const extraArgument: ThunkExtraArgs = {
  api: apiInstance,
};

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...syncReducers,
    ...asyncReducers,
    [api.reducerPath]: api.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        thunk: {
          extraArgument,
        },
      }).concat(api.middleware),
    devTools: __IS_DEV__,
    preloadedState: initialState,
  }) as StoreWithReducerManager;

  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
