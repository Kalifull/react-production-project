import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchProfileData } from '../service/fetch-profile-data';

import { Profile, ProfileSchema } from '../types/profile-schema.interface';

const initialState: ProfileSchema = {
  profileData: null,
  isLoading: false,
  error: null,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
        state.profileData = payload;
        state.isLoading = false;
      })
      .addCase(
        fetchProfileData.rejected,
        (state, { payload }: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
