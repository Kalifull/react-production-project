import { FC } from 'react';

import { cn } from '@/shared/lib';

import styles from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={cn(styles.spinner, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
