import { useMemo } from 'react';
import {
  type ActionCreator,
  type ActionCreatorWithPayload,
  type ActionCreatorsMapObject,
  bindActionCreators,
} from '@reduxjs/toolkit';

import useAppDispatch from '../use-app-dispatch';

type BoundAsyncThunk<Thunk extends ActionCreator<any>> = (
  ...args: Parameters<Thunk>
) => ReturnType<ReturnType<Thunk>>;

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends ActionCreatorWithPayload<any, any>
    ? Actions[key]
    : BoundAsyncThunk<Actions[key]>;
};

/**
 * Custom hook for binding action creators to the dispatch function.
 *
 * @param {Actions} actions The action creators to be bound to dispatch.
 * @return {BoundActions} The bound action creators.
 */

const useActionCreators = <Actions extends ActionCreatorsMapObject>(
  actions: Actions
): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};

export default useActionCreators;
