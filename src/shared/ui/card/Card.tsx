import {
  type FC,
  type ForwardedRef,
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
  memo,
} from 'react';

import { CardVariantEnum } from '../../api';
import { cn } from '../../lib';

import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: CardVariantEnum;
  ref?: ForwardedRef<HTMLDivElement>;
  children: ReactNode;
}

const Card: FC<CardProps> = memo(
  forwardRef(({ className, variant = CardVariantEnum.PRIMARY, children, ...restProps }, ref) => (
    <div ref={ref} className={cn(styles.card, {}, [className, styles[variant]])} {...restProps}>
      {children}
    </div>
  ))
);

export default Card;
