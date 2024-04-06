import { type FC, type ReactNode, type ForwardedRef, memo, forwardRef } from 'react';

import type { FlexDirection, FlexJustify, FlexAlign, FlexGap, HTMLProps } from '../../../api';

import { type Mods, cn } from '../../../lib';

import { Tag } from '../..';

import { directionClasses, alignClasses, gapClasses, justifyClasses } from './constants/flex-const';

import styles from './Flex.module.scss';

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
