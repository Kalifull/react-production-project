import { useEffect, useRef, useState, useCallback, MutableRefObject } from 'react';

import useEvent from '../use-event';

interface useInfiniteScrollProps {
  triggerOnce?: boolean;
  callback?: () => void;
  wrapperRef?: MutableRefObject<Element | null>;
  options?: IntersectionObserverInit;
}

type InViewHookResponse = [MutableRefObject<HTMLDivElement | null>, boolean] & {
  ref: MutableRefObject<HTMLDivElement | null>;
  inView: boolean;
};

const useInView = ({
  callback,
  triggerOnce,
  wrapperRef,
  options,
}: useInfiniteScrollProps = {}): InViewHookResponse => {
  const [inView, setInView] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const memoizedCallback = useEvent(callback);

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.isIntersecting) {
        memoizedCallback?.();

        if (triggerOnce) {
          observer.unobserve(entry.target);
        }
      }

      setInView(entry.isIntersecting);
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

  const result = [targetRef, inView] as InViewHookResponse;
  result.ref = result[0];
  result.inView = result[1];

  return result;
};

export default useInView;
