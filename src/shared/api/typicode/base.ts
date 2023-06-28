import axios from 'axios';

import { PERSIST_AUTH_USER_KEY } from '@/shared/constant';

const apiInstance = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(PERSIST_AUTH_USER_KEY),
  },
});

export default apiInstance;
