import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AvatarDropdown } from '@/features/avatar-dropdown';
import { PopoverNotification } from '@/features/popover-notification';
import { LoginModal } from '@/features/user-auth';

import { selectAuthData } from '@/entities/user';

import { ButtonVariantEnum } from '@/shared/api';

import { Button, Popup, HStack, Portal } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { useAppSelector } from '@/shared/lib/hooks';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation('translation');

  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useAppSelector(selectAuthData);

  const handleClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <HStack
      className={cn(styles.navbar, {}, [className])}
      tag="header"
      justify="end"
      gap="16"
      stretch
    >
      {authData ? (
        <HStack gap="16">
          <Popup>
            <PopoverNotification />
          </Popup>

          <Popup>
            <AvatarDropdown authData={authData} onAuthModal={setIsAuthModal} />
          </Popup>
        </HStack>
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
