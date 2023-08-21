import { FC, memo, useCallback, useState } from 'react';

import { ThemeSwitcher } from '@/features/theme-switcher';
import { LanguageSwitcher } from '@/features/language-switcher';

import { ButtonSizeEnum, ButtonVariantEnum } from '@/shared/api';

import { Button, VStack } from '@/shared/ui';

import { Mods, cn } from '@/shared/lib';

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

  const mods: Mods = {
    [styles.collapsed]: isCollapsed,
  };

  return (
    <menu data-testid="sidebar" className={cn(styles.sidebar, mods, [className])}>
      <Button
        type="button"
        className={cn(styles.button)}
        variant={ButtonVariantEnum.BACKGROUND_INVERTED}
        square
        size={ButtonSizeEnum.L}
        data-testid="sidebar-toggle"
        onClick={toggleCollapse}
      >
        {isCollapsed ? '>' : '<'}
      </Button>

      <VStack gap="16" className={cn(styles.links)}>
        {sidebarItemsList.map((item) => (
          <SidebarItem key={item.id} {...item} isCollapsed={isCollapsed} />
        ))}
      </VStack>

      <div className={cn(styles.switchers)}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cn(styles.lang)} isCollapsed={isCollapsed} />
      </div>
    </menu>
  );
});

export default Sidebar;
