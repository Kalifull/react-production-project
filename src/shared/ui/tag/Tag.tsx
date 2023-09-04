import { FC, ForwardedRef, ReactNode, createElement, forwardRef } from 'react';

interface TagProps {
  className?: string;
  tag: keyof JSX.IntrinsicElements;
  children: ReactNode;
  ref?: ForwardedRef<HTMLElement>;
}

const Tag: FC<TagProps> = forwardRef(({ className, tag, children, ...restProps }, ref) =>
  createElement(tag, { className, ref, ...restProps }, children)
);

export default Tag;
