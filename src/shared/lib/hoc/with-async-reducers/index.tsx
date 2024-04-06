import { useStore } from 'react-redux';
import { type ComponentType, useLayoutEffect } from 'react';
import type { DeepPartial, Reducer } from '@reduxjs/toolkit';

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
  /** @param {InitialReducers} reducers Async reducers. */
  reducers: DeepPartial<InitialReducers>;
  /** @param {boolean} removeAfterUnmount Removes the component from the store after unmount. */
  removeAfterUnmount?: boolean;
}

/**
 * Higher order component that adds async reducers to the store and removes them on unmount.
 *
 * @param {ComponentType} Component The component to wrap.
 * @param {AsyncReducersConfig} config Configuration for the async reducers.
 * @return {JSX.Element} The wrapped component.
 */

const withAsyncReducers =
  <T extends object>(Component: ComponentType<T>, config: AsyncReducersConfig) =>
  (props: T): JSX.Element => {
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
