import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import { selectFormData } from '../selectors/select-profile-state';

import type { Profile } from '../types/profile-schema.interface';

export const saveProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
  'profile/saveProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    const formData = selectFormData(getState());

    try {
      const { data } = await extra.api.put<Profile>('/profile', formData);

      return data;
    } catch (error) {
      return rejectWithValue('profileError');
    }
  }
);
