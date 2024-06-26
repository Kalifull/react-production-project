import { type FC, type ForwardedRef, forwardRef, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { AppLinkVariantEnum } from '../../api';
import { cn } from '../../lib';

import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariantEnum;
  ref?: ForwardedRef<HTMLAnchorElement>;
}

const AppLink: FC<AppLinkProps> = memo(
  forwardRef(
    ({ className, to, variant = AppLinkVariantEnum.PRIMARY, children, ...restProps }, ref) => (
      <Link
        ref={ref}
        className={cn(styles.link, {}, [className, styles[variant]])}
        to={to}
        {...restProps}
      >
        {children}
      </Link>
    )
  )
);

export default AppLink;
