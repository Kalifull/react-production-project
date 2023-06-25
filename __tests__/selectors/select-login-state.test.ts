import { DeepPartial } from '@reduxjs/toolkit';

import type { StateSchema } from '@/app/providers/store-provider';

import { selectLoginPassword, selectLoginUsername } from '@/features/user-auth';

describe('test select login state', () => {
  test('should return login state', () => {
    const state: DeepPartial<StateSchema> = { loginFormInfo: { username: 'Username' } };
    expect(selectLoginUsername(state as StateSchema)).toEqual('Username');
  });

  test('should return password state', () => {
    const state: DeepPartial<StateSchema> = { loginFormInfo: { password: 'Password' } };
    expect(selectLoginPassword(state as StateSchema)).toEqual('Password');
  });
});
