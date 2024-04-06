import { type FC, memo, useEffect } from 'react';

import { CardVariantEnum } from '@/shared/api';

import { AppLink, Card, Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { usePushNotification } from '@/shared/lib/hooks';

import type { Notification } from '../../model/types/notification.interface';

import styles from './NotificationItem.module.scss';

interface NotificationItemProps extends Notification {
  className?: string;
}

export const NotificationItem: FC<NotificationItemProps> = memo(
  ({ className, title, description, href }) => {
    const sendPushNotification = usePushNotification();

    useEffect(
      () =>
        sendPushNotification({
          title,
          options: {
            body: description,
          },
        }),
      [title, description, sendPushNotification]
    );

    return href ? (
      <AppLink className={cn(styles.link)} to={href} target="_blank" rel="noreferrer">
        <Card className={cn(styles.card, {}, [className])} variant={CardVariantEnum.OUTLINE}>
          <Text title={title} text={description} />
        </Card>
      </AppLink>
    ) : (
      <Card className={cn(styles.card, {}, [className])} variant={CardVariantEnum.OUTLINE}>
        <Text title={title} text={description} />
      </Card>
    );
  }
);
