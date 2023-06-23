import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

import { loginReducer } from '@/features/user-auth';

import type { StateSchema } from './state-schema';

export const asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginFormInfo: loginReducer,
};
