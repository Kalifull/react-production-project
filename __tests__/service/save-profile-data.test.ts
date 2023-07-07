import { CountryEnum } from '@/entities/country';
import { CurrencyEnum } from '@/entities/currency';
import { Profile, ProfileErrorsEnum, saveProfileData } from '@/entities/profile';

import { testAsyncThunk } from '@/shared/lib/test';

import Avatar from '@/shared/assets/test/storybook-avatar.png';

describe('test save profile data', () => {
  test('should fulfilled a request', async () => {
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
    const { api, dispatch, callThunk } = testAsyncThunk(saveProfileData, {
      profileInfo: {
        formData: profileData,
        isLoading: false,
        error: null,
        readOnly: true,
        validationErrors: null,
      },
    });

    api.put.mockReturnValue(Promise.resolve({ data: profileData }));
    const action = await callThunk();

    expect(api.put).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(action.payload).toEqual(profileData);
    expect(action.meta.requestStatus).toBe('fulfilled');
  });

  test('should rejected a request', async () => {
    const { api, dispatch, callThunk } = testAsyncThunk(saveProfileData);

    api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = await callThunk();

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(action.payload).toEqual([ProfileErrorsEnum.NO_DATA]);
    expect(action.meta.requestStatus).toBe('rejected');
  });

  test('should server error a request', async () => {
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
    const { api, dispatch, callThunk } = testAsyncThunk(saveProfileData, {
      profileInfo: {
        formData: profileData,
        isLoading: false,
        error: null,
        readOnly: true,
        validationErrors: null,
      },
    });
    api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = await callThunk();

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(action.payload).toEqual([ProfileErrorsEnum.SERVER_ERROR]);
    expect(action.meta.requestStatus).toBe('rejected');
  });
});
