import axios from 'axios';

import { User, fetchLoginByUsername } from '@/entities/user';

import { testAsyncThunk } from '@/shared/lib/test';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('test fetch login by username', () => {
  test('should work when user is logged in', async () => {
    const authData: User = { id: 1, username: 'User', password: 'Password' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: authData }));

    const thunk = testAsyncThunk(fetchLoginByUsername);
    const action = await thunk.callThunk({ username: 'User', password: 'Password' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(action.payload).toEqual(authData);
    expect(action.meta.requestStatus).toBe('fulfilled');
  });

  test('should rejected a request', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = testAsyncThunk(fetchLoginByUsername);
    const action = await thunk.callThunk({ username: 'User', password: 'Password' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(action.payload).toEqual('authError');
    expect(action.meta.requestStatus).toBe('rejected');
  });
});
