import { FC, ReactNode, memo } from 'react';

import { cn } from '../../lib';

import styles from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
}

const Page: FC<PageProps> = memo(({ className, children }) => (
  <article className={cn(styles['page-wrapper'], {}, [className])}>{children}</article>
));

export default Page;
