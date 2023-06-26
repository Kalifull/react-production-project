import { createSlice } from '@reduxjs/toolkit';

import { ProfileSchema } from '../types/profile-schema.interface';

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
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
