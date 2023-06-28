import { DeepPartial, Reducer } from '@reduxjs/toolkit';

import { loginReducer } from '@/features/user-auth';

import { profileReducer } from '@/entities/profile';

import type { StateSchema } from './state-schema';

export const asyncReducers: DeepPartial<Reducer<StateSchema>> = {
  loginFormInfo: loginReducer,
  profileInfo: profileReducer,
};
