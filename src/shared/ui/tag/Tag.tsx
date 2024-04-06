import { type FC, type ReactNode, createElement, forwardRef } from 'react';

import type { HTMLProps } from '../../api';

interface TagProps extends HTMLProps {
  className?: string;
  tag: keyof JSX.IntrinsicElements;
  children?: ReactNode;
}

const Tag: FC<TagProps> = forwardRef<HTMLElement, TagProps>(
  ({ className, tag, children, ...restProps }, ref) =>
    createElement(tag, { className, ref, ...restProps }, children)
);

export default Tag;
