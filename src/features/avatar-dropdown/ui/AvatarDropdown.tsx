import { type Dispatch, type FC, type SetStateAction, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { User, selectIsAdmin, selectIsManager } from '@/entities/user';

import { routesPaths } from '@/shared/config';

import { Avatar, Popup } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { actionsCreators, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

interface AvatarDropdownProps {
  className?: string;
  authData: User;
  onAuthModal?: Dispatch<SetStateAction<boolean>>;
}

const AvatarDropdown: FC<AvatarDropdownProps> = memo(({ className, authData, onAuthModal }) => {
  const { t } = useTranslation(['translation', 'admin']);

  const { logout } = useActionCreators(actionsCreators);

  const isAdmin = useAppSelector(selectIsAdmin);
  const isManager = useAppSelector(selectIsManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const handleLogout = useCallback(() => {
    onAuthModal?.(false);
    logout();
  }, [logout, onAuthModal]);

  return (
    <Popup.Dropdown
      className={cn('', {}, [className])}
      trigger={<Avatar src={authData.avatar} size={38} alt={authData.username} />}
      items={[
        {
          id: 1,
          content: t('profilePage', { ns: 'translation' }),
          href: `${routesPaths.profile}${authData.id}`,
        },
        ...(isAdminPanelAvailable
          ? [
              {
                id: 2,
                content: t('adminPage', { ns: 'admin' }),
                href: routesPaths['admin-panel'],
              },
            ]
          : []),
        { id: 3, content: t('logout', { ns: 'translation' }), handleClick: handleLogout },
      ]}
      direction="bottom-left"
    />
  );
});

export default AvatarDropdown;
