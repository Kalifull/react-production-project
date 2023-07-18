import axios from 'axios';
import { DeepPartial } from '@reduxjs/toolkit';

import { UserSchema, fetchUserByUsername, userActions, userReducer, User } from '@/entities/user';

import { testAsyncThunk } from '@/shared/lib/test';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('test user slice', () => {
  test('test logout', () => {
    const state: DeepPartial<UserSchema> = {
      authData: { id: 1, username: 'Username', password: 'Password' },
      isLoading: false,
      error: null,
    };
    const userSlice = userReducer(state as UserSchema, userActions.logout());

    expect(userSlice).toStrictEqual({ authData: null, isLoading: false, error: null });
  });

  test('test fetch login by username with pending', () => {
    const state: DeepPartial<UserSchema> = {
      authData: null,
      isLoading: false,
      error: null,
    };
    const userSlice = userReducer(state as UserSchema, fetchUserByUsername.pending);

    expect(userSlice).toStrictEqual({ authData: null, isLoading: true, error: null });
  });

  test('test fetch login by username with fulfilled', async () => {
    const authData: User = { id: 1, username: 'User', password: 'Password' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: authData }));

    const thunk = testAsyncThunk(fetchUserByUsername);
    const action = await thunk.callThunk({ username: 'User', password: 'Password' });

    const state: DeepPartial<UserSchema> = {
      authData: null,
      isLoading: false,
      error: null,
    };
    const userSlice = userReducer(state as UserSchema, action);

    expect(userSlice).toStrictEqual({ authData, isLoading: false, error: null });
  });

  test('test fetch login by username with rejected', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = testAsyncThunk(fetchUserByUsername);
    const action = await thunk.callThunk({ username: 'User', password: 'Password' });

    const state: DeepPartial<UserSchema> = {
      authData: null,
      isLoading: true,
      error: null,
    };
    const userSlice = userReducer(state as UserSchema, action);

    expect(userSlice).toStrictEqual({ authData: null, isLoading: false, error: 'authError' });
  });
});
