import { PersistPartial } from 'redux-persist/es/persistReducer';

import { LoginSchema } from '@/features/user-auth';

import { UserSchema } from '@/entities/user';

export interface StateSchema {
  userInfo: UserSchema & PersistPartial;
  loginFormInfo: LoginSchema;
}
