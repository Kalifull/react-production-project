import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import type { User } from '../types/user-schema.interface';

interface FetchLoginByUsernameParams {
  username: string;
  password: string;
}

export const fetchLoginByUsername = createAsyncThunk<User, FetchLoginByUsernameParams, ThunkConfig>(
  'login/fetchLoginByUsername',
  async (authData, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.post<User>('/login', authData);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (error) {
      return rejectWithValue('authError');
    }
  }
);
