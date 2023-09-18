import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginModal } from '@/features/user-auth';

import { selectAuthData, selectIsAdmin, selectIsManager } from '@/entities/user';

import { ButtonVariantEnum } from '@/shared/api';

import { routesPaths } from '@/shared/config';

import { Avatar, Button, Dropdown, HStack, Portal } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { useActionCreators, useAppSelector, allActions } from '@/shared/lib/hooks';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation(['translation', 'admin']);

  const [isAuthModal, setIsAuthModal] = useState(false);

  const { logout } = useActionCreators(allActions);

  const authData = useAppSelector(selectAuthData);
  const isAdmin = useAppSelector(selectIsAdmin);
  const isManager = useAppSelector(selectIsManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const handleClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthModal(false);
    logout();
  }, [logout]);

  return (
    <HStack className={cn(styles.navbar, {}, [className])} tag="header" justify="end" stretch>
      {authData ? (
        <Dropdown
          trigger={<Avatar src={authData.avatar} size={38} alt={authData.username} />}
          items={[
            { id: 1, content: t('profilePage'), href: `${routesPaths.profile}${authData.id}` },
            ...(isAdminPanelAvailable
              ? [
                  {
                    id: 2,
                    content: t('adminPage', { ns: 'admin' }),
                    href: routesPaths['admin-panel'],
                  },
                ]
              : []),
            { id: 3, content: t('logout'), handleClick: handleLogout },
          ]}
          direction="bottom-left"
        />
      ) : (
        <>
          <Button
            type="button"
            role="switch"
            aria-checked={isAuthModal}
            variant={ButtonVariantEnum.BACKGROUND_INVERTED}
            onClick={handleOpen}
          >
            {t('login')}
          </Button>

          <Portal>
            <LoginModal isOpen={isAuthModal} onClose={handleClose} />
          </Portal>
        </>
      )}
    </HStack>
  );
});

export default Navbar;
