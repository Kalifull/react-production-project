import { useEffect, useRef, useState, useCallback, MutableRefObject } from 'react';

import useEvent from '../use-event';

interface useInfiniteScrollOptions {
  /** Only trigger the inView callback once. */
  triggerOnce?: boolean;
  /** The function to be invoked when the trigger intersects with the wrapper. */
  callback?: () => void;
  /** Options has the following fields:
   *
   * `root` – The element that is used as the viewport for checking visibility of the target;
   *
   * `rootMargin` – Margin around the root. Can have values similar to the CSS margin property, e.g. `10px 20px 30px 40px` (top, right, bottom, left);
   *
   * `threshold` – Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. */
  options?: IntersectionObserverInit;
}

type InViewHookResponse<T> = [MutableRefObject<T | null>, boolean] & {
  ref: MutableRefObject<T | null>;
  inView: boolean;
};

/** Custom hook that triggers a callback function when an element (trigger) intersects with a wrapper element.
 *
 * Commonly used for implementing infinite scrolling.
 *
 * @param options An object that contains:
 *
 * `triggerOnce` – Only trigger the inView callback once;
 *
 * `callback` – The function to be invoked when the trigger intersects with the wrapper;
 *
 * `options` – The options object passed into the IntersectionObserver() constructor let you control the circumstances under which the observer's callback is invoked. */

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
