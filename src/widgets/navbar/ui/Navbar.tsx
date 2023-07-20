import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginModal } from '@/features/user-auth';

import { selectAuthData } from '@/entities/user';

import { ButtonVariantEnum } from '@/shared/api';

import { Button, Portal } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { useActionCreators, useAppSelector, allActions } from '@/shared/lib/hooks';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation('translation');

  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useAppSelector(selectAuthData);

  const { logout } = useActionCreators(allActions);

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
    <header className={cn(styles.navbar, {}, [className])}>
      {authData ? (
        <Button
          variant={ButtonVariantEnum.BACKGROUND_INVERTED}
          className={cn(styles.links)}
          onClick={handleLogout}
        >
          {t('logout')}
        </Button>
      ) : (
        <>
          <Button
            variant={ButtonVariantEnum.BACKGROUND_INVERTED}
            className={cn(styles.links)}
            onClick={handleOpen}
          >
            {t('login')}
          </Button>

          <Portal>
            <LoginModal isOpen={isAuthModal} onClose={handleClose} />
          </Portal>
        </>
      )}
    </header>
  );
});

export default Navbar;
