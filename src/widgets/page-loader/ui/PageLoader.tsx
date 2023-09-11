import { FC } from 'react';

import { Loader, VStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <VStack className={cn(styles.loader, {}, [className])} justify="center" align="center">
    <Loader />
  </VStack>
);
export default PageLoader;
