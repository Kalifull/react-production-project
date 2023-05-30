import { FC } from 'react';

import { Loader } from '@/shared/ui';

import { cn } from '@/shared/lib';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={cn(styles.loader, {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
