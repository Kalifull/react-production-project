import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from '@/features/theme-switcher';
import { LanguageSwitcher } from '@/features/language-switcher';

import { AppLinkVariantEnum, ButtonSizeEnum, ButtonVariantEnum } from '@/shared/api';

import { AppLink, Button } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { routesPaths } from '@/shared/config';

import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation('translation');

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cn(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
      data-testid="sidebar"
    >
      <Button
        type="button"
        className={styles.button}
        variant={ButtonVariantEnum.BACKGROUND_INVERTED}
        square
        size={ButtonSizeEnum.L}
        data-testid="sidebar-toggle"
        onClick={toggleCollapse}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={styles.links}>
        <AppLink
          to={routesPaths.main}
          className={styles.icons}
          variant={AppLinkVariantEnum.PRIMARY}
        >
          <MainIcon className={styles.icon} />
          <span className={styles.link}>{t('mainPage')}</span>
        </AppLink>

        <AppLink
          to={routesPaths.about}
          className={styles.icons}
          variant={AppLinkVariantEnum.PRIMARY}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t('aboutTheSite')}</span>
        </AppLink>
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.lang} short={collapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
