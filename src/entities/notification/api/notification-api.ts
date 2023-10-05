import { api } from '@/shared/api';

import type { Notification } from '../model/types/notification.interface';

const notificationApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const { useGetNotificationsQuery: useNotifications } = notificationApi;
