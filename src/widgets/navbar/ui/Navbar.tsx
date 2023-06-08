/* eslint-disable i18next/no-literal-string */
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonVariantEnum } from '@/shared/api';

import { Button, Modal, Portal } from '@/shared/ui';

import { cn } from '@/shared/lib';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('translation');

  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleToggle = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <Button className={styles.links} variant={ButtonVariantEnum.OUTLINE} onClick={handleToggle}>
        {t('login')}
      </Button>

      <Portal>
        <Modal isOpen={isAuthModal} handleToggle={handleToggle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci expedita dolore
          corporis ratione, nam quibusdam aspernatur sed reiciendis tenetur atque ullam. Ab
          consequuntur dolores nulla obcaecati voluptatem cumque facilis.
        </Modal>
      </Portal>
    </div>
  );
};

export default Navbar;
