import { type FC, memo } from 'react';

import { cn } from '../../lib';

import styles from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = memo(({ className }) => (
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
));

export default Loader;
