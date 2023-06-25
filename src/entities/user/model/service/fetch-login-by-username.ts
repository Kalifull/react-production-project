import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { User } from '../types/user-schema';

interface fetchLoginByUsernameProps {
  username: string;
  password: string;
}

export const fetchLoginByUsername = createAsyncThunk<
  User,
  fetchLoginByUsernameProps,
  { rejectValue: string }
>('login/fetchLoginByUsername', async (authData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<User>('http://localhost:8000/login', authData);

    if (!data) {
      throw new Error();
    }

    return data;
  } catch (error) {
    return rejectWithValue('authError');
  }
});
