import { useEffect, useRef, useState, useCallback, MutableRefObject } from 'react';

import useEvent from '../use-event';

interface useInfiniteScrollOptions {
  triggerOnce?: boolean;
  callback?: () => void;
  options?: IntersectionObserverInit;
}

type InViewHookResponse<T> = [MutableRefObject<T | null>, boolean] & {
  ref: MutableRefObject<T | null>;
  inView: boolean;
};

const useInView = <T extends HTMLElement>(
  { triggerOnce = false, callback, options }: useInfiniteScrollOptions = {},
  wrapperRef?: MutableRefObject<T | null>
): InViewHookResponse<T> => {
  const [isInView, setIsInView] = useState(false);
  const targetRef = useRef<T | null>(null);

  const memoizedCallback = useEvent(callback);

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.isIntersecting) {
        memoizedCallback?.();

        if (triggerOnce) {
          observer.unobserve(entry.target);
        }
      }

      setIsInView(entry.isIntersecting);
    },
    [memoizedCallback, triggerOnce]
  );

  useEffect(() => {
    const currentTargetRef = targetRef.current;

    if (currentTargetRef) {
      const initOptions: IntersectionObserverInit = {
        root: wrapperRef?.current || null,
        rootMargin: '0px',
        threshold: 1.0,
      };

      const observer = new IntersectionObserver(handleIntersect, { ...initOptions, ...options });
      observer.observe(currentTargetRef);

      return () => {
        observer.unobserve(currentTargetRef);
        observer.disconnect();
      };
    }
  }, [handleIntersect, options, wrapperRef]);

  const result = [targetRef, isInView] as InViewHookResponse<T>;
  result.ref = result[0];
  result.inView = result[1];

  return result;
};

export default useInView;
