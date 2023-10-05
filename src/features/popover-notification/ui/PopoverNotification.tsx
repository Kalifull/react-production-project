import { FC, memo } from 'react';

import { NotificationList } from '@/entities/notification';

import { ButtonVariantEnum } from '@/shared/api';

import { Button, Icon, Popup } from '@/shared/ui';

import { cn } from '@/shared/lib';

import NotificationIcon from '@/shared/assets/icons/notification.svg';

interface PopoverNotificationProps {
  className?: string;
}

const PopoverNotification: FC<PopoverNotificationProps> = memo(({ className }) => (
  <Popup.Popover
    className={cn('', {}, [className])}
    trigger={
      <Button variant={ButtonVariantEnum.CLEAR} square>
        <Icon Svg={NotificationIcon} inverted />
      </Button>
    }
  >
    <NotificationList />
  </Popup.Popover>
));

export default PopoverNotification;
