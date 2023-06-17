import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginModal } from '@/features/user-auth';

import { ButtonVariantEnum } from '@/shared/api';

import { Button, Portal } from '@/shared/ui';

import { cn } from '@/shared/lib';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('translation');

  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <Button className={styles.links} variant={ButtonVariantEnum.OUTLINE} onClick={handleOpen}>
        {t('login')}
      </Button>

      <Portal>
        <LoginModal isOpen={isAuthModal} onClose={handleClose} />
      </Portal>
    </div>
  );
};

export default Navbar;
