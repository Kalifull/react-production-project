import { useStore } from 'react-redux';
import { ElementType, useEffect } from 'react';
import { DeepPartial, Reducer } from '@reduxjs/toolkit';

import type { StateSchemaKey, StoreWithReducerManager } from '@/app/providers/store-provider';

import { useAppDispatch } from '@/shared/lib/hooks';

type InitialReducers = {
  [k in StateSchemaKey]: Reducer;
};

interface AsyncReducersConfig {
  reducers: DeepPartial<InitialReducers>;
  removeAfterUnmount?: boolean;
}

const withAsyncReducers = (Component: ElementType, config: AsyncReducersConfig) => (props: any) => {
  const { reducers, removeAfterUnmount = true } = config;

  const dispatch = useAppDispatch();
  const store = useStore() as StoreWithReducerManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([keyReducer, reducer]) => {
      if (!store.getState()[keyReducer as StateSchemaKey]) {
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
