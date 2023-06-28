import axios, { AxiosStatic } from 'axios';
import { AsyncThunkAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/store-provider';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

const testAsyncThunk = <Return, Arg, RejectedValue>(
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>
) => {
  const api: jest.MockedFunctionDeep<AxiosStatic> = mockedAxios;
  const dispatch: jest.MockedFn<any> = jest.fn();
  const getState: () => StateSchema = jest.fn();

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
