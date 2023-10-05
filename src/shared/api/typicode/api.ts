import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { PERSIST_AUTH_USER_KEY } from '../../constant';

const api = createApi({
  reducerPath: 'api-info',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(PERSIST_AUTH_USER_KEY) || '';

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default api;
