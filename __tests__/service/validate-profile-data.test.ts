import { CountryEnum } from '@/entities/country';
import { CurrencyEnum } from '@/entities/currency';
import { Profile, ProfileErrorsEnum, validateProfileData } from '@/entities/profile';

import Avatar from '@/shared/assets/test/storybook-avatar.png';

describe('test validate profile data', () => {
  test('with correct profile data', () => {
    const profileData: Profile = {
      id: '1',
      firstName: 'Алексей',
      lastName: 'Соловьев',
      age: 24,
      currency: CurrencyEnum.RUB,
      country: CountryEnum.Russia,
      city: 'Санкт-Петербург',
      username: 'Администратор',
      avatar: Avatar,
    };

    const result = validateProfileData(profileData);

    expect(result).toEqual([]);
  });

  test('without first and last name', () => {
    const profileData: Profile = {
      id: '1',
      firstName: '',
      lastName: '',
      age: 24,
      currency: CurrencyEnum.RUB,
      country: CountryEnum.Russia,
      city: 'Санкт-Петербург',
      username: 'Администратор',
      avatar: Avatar,
    };

    const result = validateProfileData(profileData);

    expect(result).toEqual([ProfileErrorsEnum.INCORRECT_USER_DATA]);
  });

  test('without city and firstName', () => {
    const profileData: Profile = {
      id: '1',
      firstName: '',
      lastName: 'Соловьев',
      age: 24,
      currency: CurrencyEnum.RUB,
      country: CountryEnum.Russia,
      city: '',
      username: 'Администратор',
      avatar: Avatar,
    };

    const result = validateProfileData(profileData);

    expect(result).toEqual([
      ProfileErrorsEnum.INCORRECT_USER_DATA,
      ProfileErrorsEnum.INCORRECT_CITY,
    ]);
  });

  test('incorrect profile data', () => {
    const profileData: Profile = {};

    const result = validateProfileData(profileData);

    expect(result).toEqual([
      ProfileErrorsEnum.INCORRECT_USER_DATA,
      ProfileErrorsEnum.INCORRECT_AGE,
      ProfileErrorsEnum.INCORRECT_CITY,
      ProfileErrorsEnum.INCORRECT_COUNTRY,
    ]);
  });

  test('without profile data', () => {
    const result = validateProfileData();

    expect(result).toEqual([ProfileErrorsEnum.NO_DATA]);
  });
});
