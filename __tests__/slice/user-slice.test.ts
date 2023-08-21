import { DeepPartial } from '@reduxjs/toolkit';

import { User, UserSchema, userActions, userReducer, fetchUserByUsername } from '@/entities/user';

import { testAsyncThunk } from '@/shared/lib/test';

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
    const { api, callThunk } = testAsyncThunk(fetchUserByUsername);

    api.post.mockReturnValue(Promise.resolve({ data: authData }));
    const action = await callThunk({ username: 'User', password: 'Password' });

    const state: DeepPartial<UserSchema> = {
      authData: null,
      isLoading: false,
      error: null,
    };
    const userSlice = userReducer(state as UserSchema, action);

    expect(userSlice).toStrictEqual({ authData, isLoading: false, error: null });
  });

  test('test fetch login by username with rejected', async () => {
    const { api, callThunk } = testAsyncThunk(fetchUserByUsername);

    api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = await callThunk({ username: 'User', password: 'Password' });

    const state: DeepPartial<UserSchema> = {
      authData: null,
      isLoading: true,
      error: null,
    };
    const userSlice = userReducer(state as UserSchema, action);

    expect(userSlice).toStrictEqual({ authData: null, isLoading: false, error: 'authError' });
  });
});
