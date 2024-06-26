import axios, { type AxiosStatic } from 'axios';
import type { AsyncThunkAction, DeepPartial } from '@reduxjs/toolkit';

import type { StateSchema } from '@/app/providers/store-provider';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

/**
 * Generate a test async thunk function.
 *
 * @param {ActionCreatorType<Return, Arg, RejectedValue>} actionCreator The action creator for the thunk.
 * @param {DeepPartial<StateSchema>} initialState The initial state for the thunk.
 * @return {Object} An object containing api, dispatch, getState, actionCreator, and callThunk.
 */

const testAsyncThunk = <Return, Arg, RejectedValue>(
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
  initialState?: DeepPartial<StateSchema>
) => {
  const api: jest.MockedFunctionDeep<AxiosStatic> = mockedAxios;
  const dispatch: jest.MockedFn<any> = jest.fn();

  const getState: () => typeof initialState = jest.fn(() => initialState);

  const callThunk = async (arg: Arg) => {
    const action = actionCreator(arg);
    const result = await action(dispatch, getState, { api });

    return result;
  };

  return {
    api,
    dispatch,
    getState,
    actionCreator,
    callThunk,
  };
};

export default testAsyncThunk;
