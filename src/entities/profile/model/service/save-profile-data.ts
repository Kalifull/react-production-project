import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import { validateProfileData } from './validate-profile-data';
import { selectFormData } from '../selectors/select-profile-state';

import { ProfileErrorsEnum } from '../const/const-profile';
import type { Profile } from '../types/profile.interface';

export const saveProfileData = createAsyncThunk<Profile, void, ThunkConfig<ProfileErrorsEnum[]>>(
  'profileInfo/saveProfileData',
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
