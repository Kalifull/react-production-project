import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import type { Profile } from '../types/profile-schema.interface';

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
  'profileInfo/fetchProfileData',
  async (profileId, { rejectWithValue, extra }) => {
    try {
      if (!profileId) {
        return rejectWithValue('profileError');
      }

      const { data: profile } = await extra.api.get<Profile>(`/profile/${profileId}`);

      if (!profile) {
        throw new Error();
      }

      return profile;
    } catch (error) {
      return rejectWithValue('profileError');
    }
  }
);
