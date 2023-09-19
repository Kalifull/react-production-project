import type { DeepPartial } from '@reduxjs/toolkit';

import { LoginSchema, loginActions, loginReducer } from '@/features/user-auth';

describe('test login slice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '' };
    const loginSlice = loginReducer(
      state as LoginSchema,
      loginActions.setUsername({ username: 'Username' })
    );

    expect(loginSlice).toStrictEqual({ username: 'Username' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '' };
    const loginSlice = loginReducer(
      state as LoginSchema,
      loginActions.setPassword({ password: 'Password' })
    );

    expect(loginSlice).toStrictEqual({ password: 'Password' });
  });
});
