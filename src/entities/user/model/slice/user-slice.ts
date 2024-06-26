import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchUserByUsername } from '../service/fetch-user-by-username';

import type { User } from '../types/user.interface';
import type { UserSchema, PayloadFetchUserError } from '../types/user-schema.interface';

const initialState: UserSchema = {
  authData: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user-info',
  initialState,
  reducers: {
    logout(state) {
      state.authData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByUsername.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserByUsername.fulfilled, (state, { payload }: PayloadAction<User>) => {
        state.authData = payload;
        state.isLoading = false;
      })
      .addCase(
        fetchUserByUsername.rejected,
        (state, { payload }: PayloadAction<PayloadFetchUserError>) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
