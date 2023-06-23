import { useStore } from 'react-redux';
import { ElementType, useEffect } from 'react';
import { DeepPartial, Reducer } from '@reduxjs/toolkit';

import type { StateSchemaKey, StoreWithReducerManager } from '@/app/providers/store-provider';

import { useAppDispatch } from '@/shared/lib/hooks';

type ReducersList = [StateSchemaKey, Reducer];

type InitialRegister = {
  [k in StateSchemaKey]: Reducer;
};

interface AsyncReducersConfig {
  reducers: DeepPartial<InitialRegister>;
  removeAfterUnmount?: boolean;
}

const withAsyncReducers = (Component: ElementType, config: AsyncReducersConfig) => (props: any) => {
  const { reducers, removeAfterUnmount = true } = config;

  const dispatch = useAppDispatch();
  const store = useStore() as StoreWithReducerManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([keyReducer, reducer]: ReducersList) => {
      if (!store.getState()[keyReducer]) {
        store.reducerManager.add(keyReducer, reducer);
        dispatch({ type: `@INIT/${keyReducer} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([keyReducer]: ReducersList) => {
          store.reducerManager.remove(keyReducer);
          dispatch({ type: `@DESTROY/${keyReducer} reducer` });
        });
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store]);

  return <Component {...props} />;
};

export default withAsyncReducers;
