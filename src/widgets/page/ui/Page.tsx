import { useLocation } from 'react-router-dom';
import { FC, ReactNode, UIEvent, useLayoutEffect, useRef } from 'react';

import { selectScrollPositionByPath } from '@/features/scroll-recovery';

import { allActions, useActionCreators, useAppSelector, useThrottleFn } from '@/shared/lib/hooks';

import { cn } from '@/shared/lib';

import styles from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
}

const Page: FC<PageProps> = ({ className, children }) => {
  const { pathname } = useLocation();
  const wrapperRef = useRef<HTMLElement | null>(null);

  const { setScrollPosition } = useActionCreators(allActions);

  const scrollPosition = useAppSelector(selectScrollPositionByPath(pathname));

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  const handleSetScrollPosition = useThrottleFn(
    (event: UIEvent<HTMLElement>) => {
      const position = event.currentTarget.scrollTop;
      setScrollPosition({ pathname, position });
    },
    { ms: 250 }
  );

  return (
    <article
      ref={wrapperRef}
      className={cn(styles['page-wrapper'], {}, [className])}
      onScroll={handleSetScrollPosition}
    >
      {children}
    </article>
  );
};

export default Page;
