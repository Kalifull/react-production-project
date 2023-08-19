import { useStore } from 'react-redux';
import { ElementType, useLayoutEffect } from 'react';
import { DeepPartial, Reducer } from '@reduxjs/toolkit';

import type {
  StateSchema,
  StateSchemaKey,
  StoreWithReducerManager,
} from '@/app/providers/store-provider';

import { useAppDispatch } from '../../hooks';

type InitialReducers = {
  [key in StateSchemaKey]: Reducer<NonNullable<StateSchema[key]>>;
};

interface AsyncReducersConfig {
  reducers: DeepPartial<InitialReducers>;
  removeAfterUnmount?: boolean;
}

const withAsyncReducers = (Component: ElementType, config: AsyncReducersConfig) => (props: any) => {
  const { reducers, removeAfterUnmount = true } = config;

  const dispatch = useAppDispatch();
  const store = useStore() as StoreWithReducerManager;

  useLayoutEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([keyReducer, reducer]) => {
      const isMounted = mountedReducers[keyReducer as StateSchemaKey];

      if (!isMounted) {
        store.reducerManager.add(keyReducer as StateSchemaKey, reducer as Reducer);
        dispatch({ type: `@INIT/${keyReducer} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([keyReducer]) => {
          store.reducerManager.remove(keyReducer as StateSchemaKey);
          dispatch({ type: `@DESTROY/${keyReducer} reducer` });
        });
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store]);

  return <Component {...props} />;
};

export default withAsyncReducers;
