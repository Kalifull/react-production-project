import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import type { Profile } from '../types/profile-schema.interface';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.get<Profile>('/profile');

      return data;
    } catch (error) {
      return rejectWithValue('profileError');
    }
  }
);
