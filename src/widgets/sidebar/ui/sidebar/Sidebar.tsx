import { FC, useState } from 'react';

import { ThemeSwitcher } from '@/features/theme-switcher';
import { LanguageSwitcher } from '@/features/language-switcher';

import { Button } from '@/shared/ui';

import { cn } from '@/shared/lib';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={cn(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <Button type="button" onClick={toggleCollapse}>
        TOGGLE
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
