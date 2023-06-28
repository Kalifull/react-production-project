import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchLoginByUsername } from '../service/fetch-login-by-username';

import { User, UserSchema } from '../types/user-schema.interface';

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
      .addCase(fetchLoginByUsername.fulfilled, (state, { payload }: PayloadAction<User>) => {
        state.authData = payload;
        state.isLoading = false;
      })
      .addCase(
        fetchLoginByUsername.rejected,
        (state, { payload }: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
