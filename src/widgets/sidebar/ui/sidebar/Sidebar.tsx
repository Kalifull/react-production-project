import { FC, memo, useCallback, useState } from 'react';

import { ThemeSwitcher } from '@/features/theme-switcher';
import { LanguageSwitcher } from '@/features/language-switcher';

import { ButtonSizeEnum, ButtonVariantEnum } from '@/shared/api';

import { Button } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { SidebarItem } from '../sidebar-item/SidebarItem';

import { SidebarItemsList } from '../../model/types/sidebar-item.interface';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

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
        {SidebarItemsList.map((item) => (
          <SidebarItem key={item.id} {...item} collapsed={collapsed} />
        ))}
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.lang} collapsed={collapsed} />
      </div>
    </div>
  );
});

export default Sidebar;
