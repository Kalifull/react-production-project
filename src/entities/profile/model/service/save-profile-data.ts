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
      const { data: profile } = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

      if (!profile) {
        throw new Error();
      }

      return profile;
    } catch (error) {
      return rejectWithValue([ProfileErrorsEnum.SERVER_ERROR]);
    }
  }
);
