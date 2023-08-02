import axios from 'axios';

import { PERSIST_AUTH_USER_KEY } from '@/shared/constant';

const apiInstance = axios.create({
  baseURL: __API__,
});

apiInstance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem(PERSIST_AUTH_USER_KEY) || '';
  return config;
});

export default apiInstance;
