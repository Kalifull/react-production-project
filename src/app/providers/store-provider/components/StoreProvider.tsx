import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

import type { StateSchema } from '../config/state-schema';

import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

/**
 * Creates a StoreProvider component that initializes a Redux store with the provided initial state and async reducers,
 * and wraps the children components with Redux Provider and PersistGate.
 *
 * @param {ReactNode} [props.children] The child components to be wrapped by the Provider and PersistGate.
 * @param {StateSchema} [props.initialState] The initial state for the Redux store.
 * @param {ReducersMapObject<StateSchema>} [props.asyncReducers] The async reducers to be added to the Redux store.
 * @return {ReactNode} The wrapped components with Redux Provider and PersistGate.
 */

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  );

  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
