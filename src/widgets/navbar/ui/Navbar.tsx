import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink } from '@/shared/ui';

import { AppLinkThemeEnum } from '@/shared/api';

import { routesPaths } from '@/shared/config/routes-config';

import { cn } from '@/shared/lib';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('translation');

  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to={routesPaths.main} variant={AppLinkThemeEnum.PRIMARY}>
          {t('mainPage')}
        </AppLink>
        <AppLink to={routesPaths.about} variant={AppLinkThemeEnum.PRIMARY}>
          {t('aboutTheSite')}
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
