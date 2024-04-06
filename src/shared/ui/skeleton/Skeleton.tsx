import { type CSSProperties, type FC, memo } from 'react';

import { cn } from '../../lib';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  count?: number;
  width?: string | number;
  height?: string | number;
  border?: string;
}

const Skeleton: FC<SkeletonProps> = memo(({ className, count = 1, height, width, border }) => {
  const skeletonStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return Array(count)
    .fill(null)
    .map((_, index) => (
      <div key={index} className={cn(styles.skeleton, {}, [className])} style={skeletonStyles} />
    ));
});

export default Skeleton;
