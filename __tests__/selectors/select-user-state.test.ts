import { DeepPartial } from '@reduxjs/toolkit';

import type { StateSchema } from '@/app/providers/store-provider';

import { selectUserState } from '@/entities/user';

describe('test select user state', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = { userInfo: { error: 'error' } };
    expect(selectUserState(state as StateSchema)).toEqual({ error: 'error' });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectUserState(state as StateSchema)).toEqual(undefined);
  });

  test('should return loaded state', () => {
    const state: DeepPartial<StateSchema> = { userInfo: { isLoading: true } };
    expect(selectUserState(state as StateSchema)).toEqual({ isLoading: true });
  });
});
