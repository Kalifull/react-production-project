import { FC, memo } from 'react';

import { Skeleton, VStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { NotificationItem } from '../notification-item/NotificationItem';

import { useNotifications } from '../../api/notification-api';

import styles from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

const NotificationList: FC<NotificationListProps> = memo(({ className }) => {
  const { data: notifications, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  });

  return (
    <VStack className={cn(styles.notifications, {}, [className])} gap="16" stretch>
      {isLoading && (
        <>
          <Skeleton width="100%" height={90} border="8px" />
          <Skeleton width="100%" height={90} border="8px" />
          <Skeleton width="100%" height={90} border="8px" />
        </>
      )}
      {notifications &&
        notifications.map((notification) => (
          <NotificationItem key={notification.id} {...notification} />
        ))}
    </VStack>
  );
});

export default NotificationList;
