import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchProfileData } from '../service/fetch-profile-data';
import { saveProfileData } from '../service/save-profile-data';

import type {
  Profile,
  ProfileSchema,
  PayloadReadOnly,
  PayloadProfileForm,
  PayloadSaveProfileErrors,
  PayloadFetchProfileErrors,
} from '../types/profile-schema.interface';

const initialState: ProfileSchema = {
  profileData: null,
  formData: null,
  isLoading: false,
  error: null,
  readOnly: true,
  validationErrors: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly(state, { payload: { readOnly } }: PayloadAction<PayloadReadOnly>) {
      state.readOnly = readOnly;
    },

    setCancelEdit(state, { payload: { readOnly } }: PayloadAction<PayloadReadOnly>) {
      state.readOnly = readOnly;
      state.formData = state.profileData;
      state.validationErrors = null;
    },

    updateProfileForm(state, { payload: { value, field } }: PayloadAction<PayloadProfileForm>) {
      state.formData = { ...state.formData, [field]: value };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
        state.profileData = payload;
        state.formData = payload;
        state.isLoading = false;
      })
      .addCase(
        fetchProfileData.rejected,
        (state, { payload }: PayloadAction<PayloadFetchProfileErrors>) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addCase(saveProfileData.pending, (state) => {
        state.isLoading = true;
        state.validationErrors = null;
      })
      .addCase(saveProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
        state.profileData = payload;
        state.formData = payload;
        state.isLoading = false;
        state.readOnly = true;
      })
      .addCase(
        saveProfileData.rejected,
        (state, { payload }: PayloadAction<PayloadSaveProfileErrors>) => {
          state.isLoading = false;
          state.validationErrors = payload;
        }
      );
  },
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
