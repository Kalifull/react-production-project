import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import type { User } from '../types/user-schema.interface';

interface FetchUserByUsernameParams {
  username: string;
  password: string;
}

export const fetchUserByUsername = createAsyncThunk<
  User,
  FetchUserByUsernameParams,
  ThunkConfig<string>
>('user/fetchUserByUsername', async (authData, { rejectWithValue, extra }) => {
  try {
    const { data: user } = await extra.api.post<User>('/login', authData);

    if (!user) {
      throw new Error();
    }

    return user;
  } catch (error) {
    return rejectWithValue('authError');
  }
});
