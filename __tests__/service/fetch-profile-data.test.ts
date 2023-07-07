import { CountryEnum } from '@/entities/country';
import { CurrencyEnum } from '@/entities/currency';
import { Profile, fetchProfileData } from '@/entities/profile';

import { testAsyncThunk } from '@/shared/lib/test';

import Avatar from '@/shared/assets/test/storybook-avatar.png';

describe('test fetch profile data', () => {
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
    const { api, dispatch, callThunk } = testAsyncThunk(fetchProfileData);

    api.get.mockReturnValue(Promise.resolve({ data: profileData }));
    const action = await callThunk();

    expect(api.get).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(action.payload).toEqual(profileData);
    expect(action.meta.requestStatus).toBe('fulfilled');
  });

  test('should rejected a request', async () => {
    const { api, dispatch, callThunk } = testAsyncThunk(fetchProfileData);

    api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = await callThunk();

    expect(api.get).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(action.payload).toEqual('profileError');
    expect(action.meta.requestStatus).toBe('rejected');
  });
});
