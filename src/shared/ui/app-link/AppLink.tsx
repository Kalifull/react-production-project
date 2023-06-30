import { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { AppLinkVariantEnum } from '../../api';

import { cn } from '../../lib';

import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariantEnum;
}

const AppLink: FC<AppLinkProps> = memo((props) => {
  const { to, className, variant = AppLinkVariantEnum.PRIMARY, children, ...restProps } = props;

  return (
    <Link to={to} className={cn(styles.link, {}, [className, styles[variant]])} {...restProps}>
      {children}
    </Link>
  );
});

export default AppLink;
