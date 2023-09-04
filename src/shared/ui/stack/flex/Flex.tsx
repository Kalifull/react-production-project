import {
  FC,
  memo,
  ReactNode,
  forwardRef,
  ForwardedRef,
  HTMLAttributes,
  DetailedHTMLProps,
} from 'react';

import type { FlexDirection, FlexJustify, FlexAlign, FlexGap } from '../../../api';
import { Tag } from '../..';
import { Mods, cn } from '../../../lib';

import styles from './Flex.module.scss';

const directionClasses: Record<FlexDirection, string> = {
  row: styles['direction-row'],
  column: styles['direction-column'],
};

const justifyClasses: Record<FlexJustify, string> = {
  center: styles['justify-center'],
  start: styles['justify-start'],
  end: styles['justify-end'],
  between: styles['justify-between'],
};

const alignClasses: Record<FlexAlign, string> = {
  center: styles['align-center'],
  start: styles['align-start'],
  end: styles['align-end'],
  stretch: styles['align-stretch'],
};

const gapClasses: Record<FlexGap, string> = {
  4: styles['gap-4'],
  8: styles['gap-8'],
  16: styles['gap-16'],
  32: styles['gap-32'],
};

type HTMLProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export interface FlexProps extends HTMLProps {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  ref?: ForwardedRef<HTMLElement>;
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
      tag = 'div',
      direction = 'row',
      justify = 'start',
      align = 'center',
      gap,
      stretch,
      children,
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
      <Tag
        className={cn(styles.flex, mods, [className, ...classes])}
        ref={ref}
        tag={tag}
        {...restProps}
      >
        {children}
      </Tag>
    );
  })
);

export default Flex;
