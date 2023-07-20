import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type {
  LoginSchema,
  PayloadPassword,
  PayloadUsername,
} from '../types/login-schema.interface';

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
});

export const { actions: loginActions } = loginSlice;

export const { reducer: loginReducer } = loginSlice;
