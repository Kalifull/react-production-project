import { User, fetchLoginByUsername } from '@/entities/user';

import { testAsyncThunk } from '@/shared/lib/test';

describe('test fetch login by username', () => {
  test('should work when user is logged in', async () => {
    const authData: User = { id: 1, username: 'User', password: 'Password' };
    const { api, dispatch, callThunk } = testAsyncThunk(fetchLoginByUsername);

    api.post.mockReturnValue(Promise.resolve({ data: authData }));
    const action = await callThunk({ username: 'User', password: 'Password' });

    expect(api.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(action.payload).toEqual(authData);
    expect(action.meta.requestStatus).toBe('fulfilled');
  });

  test('should rejected a request', async () => {
    const { api, dispatch, callThunk } = testAsyncThunk(fetchLoginByUsername);

    api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = await callThunk({ username: 'User', password: 'Password' });

    expect(api.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(action.payload).toEqual('authError');
    expect(action.meta.requestStatus).toBe('rejected');
  });
});
