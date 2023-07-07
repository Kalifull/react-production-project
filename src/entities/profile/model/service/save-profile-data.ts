import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import { validateProfileData } from './validate-profile-data';
import { selectFormData } from '../selectors/select-profile-state';

import { Profile, ProfileErrorsEnum } from '../types/profile-schema.interface';

export const saveProfileData = createAsyncThunk<Profile, void, ThunkConfig<ProfileErrorsEnum[]>>(
  'profile/saveProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    const formData = selectFormData(getState());
    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const { data } = await extra.api.put<Profile>('/profile', formData);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (error) {
      return rejectWithValue([ProfileErrorsEnum.SERVER_ERROR]);
    }
  }
);
