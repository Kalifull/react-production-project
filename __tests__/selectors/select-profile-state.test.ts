import type { DeepPartial } from '@reduxjs/toolkit';

import type { StateSchema } from '@/app/providers/store-provider';

import { CountryEnum } from '@/entities/country';
import { CurrencyEnum } from '@/entities/currency';
import {
  selectProfileData,
  selectProfileError,
  selectProfileReadOnly,
  selectProfileIsLoading,
} from '@/entities/profile';

import Avatar from '@/shared/assets/test/storybook-avatar.png';

describe('test select profile state', () => {
  test('should return state', () => {
    const profileData = {
      firstName: 'Алексей',
      lastName: 'Соловьев',
      age: 24,
      currency: CurrencyEnum.RUB,
      country: CountryEnum.Russia,
      city: 'Санкт-Петербург',
      username: 'Администратор',
      avatar: Avatar,
    };

    const state: DeepPartial<StateSchema> = {
      profileInfo: {
        profileData,
        isLoading: false,
        error: null,
        readOnly: true,
        validationErrors: null,
      },
    };
    expect(selectProfileData(state as StateSchema)).toEqual(profileData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileError(state as StateSchema)).toEqual(undefined);
  });

  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      profileInfo: { isLoading: false, error: 'error', readOnly: true },
    };
    expect(selectProfileIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profileInfo: { isLoading: false, error: 'error', readOnly: true },
    };
    expect(selectProfileError(state as StateSchema)).toEqual('error');
  });

  test('should return readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profileInfo: { isLoading: false, error: 'error', readOnly: true },
    };
    expect(selectProfileReadOnly(state as StateSchema)).toEqual(true);
  });
});
