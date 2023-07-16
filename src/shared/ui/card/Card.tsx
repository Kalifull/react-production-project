import { FC, ForwardedRef, HTMLAttributes, ReactNode, forwardRef, memo } from 'react';

import { cn } from '../../lib';

import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  ref?: ForwardedRef<HTMLDivElement>;
  children: ReactNode;
}

const Card: FC<CardProps> = memo(
  forwardRef(({ className, children, ...restProps }, ref) => (
    <div ref={ref} className={cn(styles.card, {}, [className])} {...restProps}>
      {children}
    </div>
  ))
);

export default Card;
