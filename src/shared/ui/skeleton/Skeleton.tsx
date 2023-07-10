import { CSSProperties, FC, memo } from 'react';

import { cn } from '../../lib';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  border?: string;
}

const Skeleton: FC<SkeletonProps> = memo((props) => {
  const { className, height, width, border } = props;

  const skeletonStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={cn(styles.skeleton, {}, [className])} style={skeletonStyles} />;
});

export default Skeleton;
