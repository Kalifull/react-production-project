import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { selectAuthData } from '@/entities/user';

import { AppLinkVariantEnum } from '@/shared/api';

import { AppLink } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { useAppSelector } from '@/shared/lib/hooks';

import type { SidebarItemList } from '../../model/types/sidebar-item-list.interface';

import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  path: SidebarItemList['path'];
  text: SidebarItemList['text'];
  Icon: SidebarItemList['Icon'];
  authOnly?: boolean;
  isCollapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
  const { path, text, Icon, authOnly, isCollapsed } = props;

  const { t } = useTranslation('translation');

  const auth = useAppSelector(selectAuthData);

  if (authOnly && !auth) {
    return null;
  }

  return (
    <AppLink
      to={path}
      className={cn(styles.icons, { [styles.collapsed]: isCollapsed })}
      variant={AppLinkVariantEnum.PRIMARY}
    >
      <Icon className={cn(styles.icon)} />
      <p className={cn(styles.link)}>{t(text)}</p>
    </AppLink>
  );
});
