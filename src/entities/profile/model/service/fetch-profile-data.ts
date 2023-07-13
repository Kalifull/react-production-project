import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import type { Profile } from '../types/profile-schema.interface';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { rejectWithValue, extra }) => {
    try {
      const { data: profile } = await extra.api.get<Profile>('/profile');

      if (!profile) {
        throw new Error();
      }

      return profile;
    } catch (error) {
      return rejectWithValue('profileError');
    }
  }
);
