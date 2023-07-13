import { FC, memo, useCallback, useState } from 'react';

import { ThemeSwitcher } from '@/features/theme-switcher';
import { LanguageSwitcher } from '@/features/language-switcher';

import { ButtonSizeEnum, ButtonVariantEnum } from '@/shared/api';

import { Button } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { useAppSelector } from '@/shared/lib/hooks';

import { SidebarItem } from '../sidebar-item/SidebarItem';

import { selectSidebarItems } from '../../model/selectors/select-sidebar-items';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarItemsList = useAppSelector(selectSidebarItems);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <div
      className={cn(styles.sidebar, { [styles.collapsed]: isCollapsed }, [className])}
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
        {isCollapsed ? '>' : '<'}
      </Button>

      <div className={styles.links}>
        {sidebarItemsList.map((item) => (
          <SidebarItem key={item.id} {...item} isCollapsed={isCollapsed} />
        ))}
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.lang} isCollapsed={isCollapsed} />
      </div>
    </div>
  );
});

export default Sidebar;
