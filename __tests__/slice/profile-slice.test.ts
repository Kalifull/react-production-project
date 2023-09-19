import type { DeepPartial } from '@reduxjs/toolkit';

import { CountryEnum } from '@/entities/country';
import { CurrencyEnum } from '@/entities/currency';
import {
  Profile,
  ProfileSchema,
  profileActions,
  profileReducer,
  saveProfileData,
} from '@/entities/profile';

import Avatar from '@/shared/assets/test/storybook-avatar.png';

describe('test  profile slice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readOnly: false,
    };
    const profileSlice = profileReducer(
      state as ProfileSchema,
      profileActions.setReadOnly({ readOnly: true })
    );

    expect(profileSlice).toStrictEqual({ readOnly: true });
  });

  test('test fetch profile data with pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      profileData: null,
      formData: null,
      isLoading: false,
      error: null,
      readOnly: true,
      validationErrors: null,
    };
    const profileSlice = profileReducer(state as ProfileSchema, saveProfileData.pending);

    expect(profileSlice).toStrictEqual({
      profileData: null,
      formData: null,
      isLoading: true,
      error: null,
      readOnly: true,
      validationErrors: null,
    });
  });

  test('test fetch profile data with fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      profileData: null,
      formData: null,
      isLoading: true,
      error: null,
      readOnly: true,
      validationErrors: null,
    };

    const profileData: Profile = {
      firstName: 'Алексей',
      lastName: 'Соловьев',
      age: 24,
      currency: CurrencyEnum.RUB,
      country: CountryEnum.Russia,
      city: 'Санкт-Петербург',
      username: 'Администратор',
      avatar: Avatar,
    };

    const profileSlice = profileReducer(
      state as ProfileSchema,
      saveProfileData.fulfilled(profileData, '')
    );

    expect(profileSlice).toStrictEqual({
      profileData,
      formData: profileData,
      isLoading: false,
      error: null,
      readOnly: true,
      validationErrors: null,
    });
  });
});
