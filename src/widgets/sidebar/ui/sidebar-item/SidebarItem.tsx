import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLinkVariantEnum } from '@/shared/api';

import { AppLink } from '@/shared/ui';

import { cn } from '@/shared/lib';

import type { SidebarItemType } from '../../model/types/sidebar-item.interface';

import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  path: SidebarItemType['path'];
  text: SidebarItemType['text'];
  Icon: SidebarItemType['Icon'];
  isCollapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ path, text, Icon, isCollapsed }) => {
  const { t } = useTranslation('translation');

  return (
    <div className={cn(styles.links)}>
      <AppLink
        to={path}
        className={cn(styles.icons, { [styles.collapsed]: isCollapsed })}
        variant={AppLinkVariantEnum.PRIMARY}
      >
        <Icon className={cn(styles.icon)} />
        <p className={cn(styles.link)}>{t(text)}</p>
      </AppLink>
    </div>
  );
});
