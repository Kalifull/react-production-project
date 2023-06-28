import { useMemo } from 'react';
import {
  ActionCreator,
  ActionCreatorWithPayload,
  ActionCreatorsMapObject,
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

const useActionCreators = <Actions extends ActionCreatorsMapObject>(
  actions: Actions
): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};

export default useActionCreators;
