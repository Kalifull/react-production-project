import { FC, memo, useCallback, useState } from 'react';

import { ThemeSwitcher } from '@/features/theme-switcher';
import { LanguageSwitcher } from '@/features/language-switcher';

import { ButtonSizeEnum, ButtonVariantEnum } from '@/shared/api';

import { Button, HStack, VStack } from '@/shared/ui';

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
        data-testid="sidebar-toggle"
        className={cn(styles.button)}
        type="button"
        role="switch"
        aria-checked={!!isCollapsed}
        variant={ButtonVariantEnum.BACKGROUND_INVERTED}
        square
        size={ButtonSizeEnum.L}
        onClick={toggleCollapse}
      >
        {isCollapsed ? '>' : '<'}
      </Button>

      <VStack className={cn(styles.links)} gap="16" tag="nav" role="navigation">
        {sidebarItemsList.map((item) => (
          <SidebarItem key={item.id} {...item} isCollapsed={isCollapsed} />
        ))}
      </VStack>

      <HStack
        className={cn(styles.switchers)}
        justify="center"
        gap={isCollapsed ? '4' : '16'}
        stretch
      >
        <ThemeSwitcher />
        <LanguageSwitcher isCollapsed={isCollapsed} />
      </HStack>
    </menu>
  );
});

export default Sidebar;
