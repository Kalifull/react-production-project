import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { userActions } from '@/entities/user';

import { LoginSchema, PayloadPassword, PayloadUsername } from '../types/login-schema';

const initialState: LoginSchema = {
  username: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, { payload: { username } }: PayloadAction<PayloadUsername>) {
      state.username = username;
    },

    setPassword(state, { payload: { password } }: PayloadAction<PayloadPassword>) {
      state.password = password;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userActions.logout, (state) => {
      state.username = '';
      state.password = '';
    });
  },
});

export const { actions: loginActions } = loginSlice;

export const { reducer: loginReducer } = loginSlice;
