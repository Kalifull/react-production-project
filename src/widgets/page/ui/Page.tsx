import {
  type FC,
  type UIEvent,
  type ReactNode,
  type ForwardedRef,
  memo,
  useRef,
  forwardRef,
  useLayoutEffect,
} from 'react';
import { useLocation } from 'react-router-dom';

import { selectScrollPositionByPath } from '@/features/scroll-recovery';

import { Tag } from '@/shared/ui';

import { cn } from '@/shared/lib';

import {
  actionsCreators,
  useActionCreators,
  useAppSelector,
  useCombinedRef,
  useThrottleFn,
} from '@/shared/lib/hooks';

import styles from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  ref?: ForwardedRef<HTMLElement>;
}

const Page: FC<PageProps> = memo(
  forwardRef(({ className, children }, ref) => {
    const { pathname } = useLocation();

    const wrapperRef = useRef<HTMLElement | null>(null);

    const combinedRef = useCombinedRef(ref, wrapperRef);

    const { setScrollPosition } = useActionCreators(actionsCreators);

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
      <Tag
        className={cn(styles['page-wrapper'], {}, [className])}
        ref={combinedRef}
        tag="main"
        onScroll={handleSetScrollPosition}
      >
        {children}
      </Tag>
    );
  })
);

export default Page;
