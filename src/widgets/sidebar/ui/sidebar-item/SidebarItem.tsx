import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLinkVariantEnum } from '@/shared/api';

import { AppLink } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { SidebarItemType } from '../../model/types/sidebar-item.interface';

import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  path: SidebarItemType['path'];
  text: SidebarItemType['text'];
  Icon: SidebarItemType['Icon'];
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ path, text, Icon, collapsed }) => {
  const { t } = useTranslation(['main', 'about', 'profile']);

  return (
    <AppLink
      to={path}
      className={cn(styles.icons, { [styles.collapsed]: collapsed })}
      variant={AppLinkVariantEnum.PRIMARY}
    >
      <Icon className={styles.icon} />
      <span className={styles.link}>{t(text, { ns: ['main', 'about', 'profile'] })}</span>
    </AppLink>
  );
});
