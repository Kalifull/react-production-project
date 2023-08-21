import { FC, ReactNode, createElement } from 'react';

interface TagProps {
  className?: string;
  tag: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

const Tag: FC<TagProps> = ({ className, tag, children, ...restProps }) =>
  createElement(tag, { className, ...restProps }, children);

export default Tag;
