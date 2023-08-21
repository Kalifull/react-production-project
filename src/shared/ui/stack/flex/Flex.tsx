import { FC, ForwardedRef, HTMLAttributes, ReactNode, forwardRef, memo } from 'react';

import { FlexDirection, FlexJustify, FlexAlign, FlexGap } from '../../../api';
import { Mods, cn } from '../../../lib';

import styles from './Flex.module.scss';

const directionClasses: Record<FlexDirection, string> = {
  row: styles['direction-row'],
  column: styles['direction-column'],
};

const justifyClasses: Record<FlexJustify, string> = {
  start: styles['justify-start'],
  end: styles['justify-end'],
  center: styles['justify-center'],
  between: styles['justify-between'],
};

const alignClasses: Record<FlexAlign, string> = {
  start: styles['align-start'],
  end: styles['align-end'],
  center: styles['align-center'],
};

const gapClasses: Record<FlexGap, string> = {
  4: styles['gap-4'],
  8: styles['gap-8'],
  16: styles['gap-16'],
  32: styles['gap-32'],
};

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  ref?: ForwardedRef<HTMLDivElement>;
  direction: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap;
  stretch?: boolean;
  children: ReactNode;
}

const Flex: FC<FlexProps> = memo(
  forwardRef((props, ref) => {
    const {
      className,
      children,
      direction = 'row',
      justify = 'start',
      align = 'center',
      gap,
      stretch,
      ...restProps
    } = props;

    const mods: Mods = {
      [styles.stretch]: stretch,
    };

    const classes = [
      directionClasses[direction],
      justifyClasses[justify],
      alignClasses[align],
      gap && gapClasses[gap],
    ];

    return (
      <div ref={ref} className={cn(styles.flex, mods, [className, ...classes])} {...restProps}>
        {children}
      </div>
    );
  })
);

export default Flex;
