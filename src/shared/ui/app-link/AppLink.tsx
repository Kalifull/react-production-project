import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { AppLinkThemeEnum } from '@/shared/api';

import { cn } from '@/shared/lib';

import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkThemeEnum;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, variant = AppLinkThemeEnum.PRIMARY, children, ...restProps } = props;

  return (
    <Link to={to} className={cn(styles.link, {}, [className, styles[variant]])} {...restProps}>
      {children}
    </Link>
  );
};

export default AppLink;
