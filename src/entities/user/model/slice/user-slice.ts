import { createSlice } from '@reduxjs/toolkit';

import { fetchLoginByUsername } from '../service/fetch-login-by-username';

import { UserSchema } from '../types/user-schema';

const initialState: UserSchema = {
  authData: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.authData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginByUsername.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLoginByUsername.fulfilled, (state, { payload }) => {
        state.authData = payload;
        state.isLoading = false;
      })
      .addCase(fetchLoginByUsername.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
