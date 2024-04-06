import { useEffect, useRef, useState, useCallback, type MutableRefObject } from 'react';

import useEvent from '../use-event';

interface UseInViewOptions {
  /** @param {boolean} [options.triggerOnce] Run callback function once when the element (trigger) intersects with its container. */
  triggerOnce?: boolean;
  /** @param {Function} [options.callback] Function to be called when the trigger intersects with its container. */
  callback?: () => void;
  /** Intersection observer options:
   * - `root` — Element that is used as the bounding box when checking visibility of the target.
   * - `rootMargin` — CSS margin around the root. Can have values similar to the margin property, e.g. "10px 20px 30px 40px".
   * - `threshold` — Number or array of numbers between 0 and 1, indicating at what percentage of the target's visibility the observer's callback should be executed.
   * @param {IntersectionObserverInit} [options.intersectionOptions] Options passed to the `IntersectionObserver` constructor.
   */
  intersectionOptions?: IntersectionObserverInit;
}

/** Поддерживает деструктуризацию как массива, так и объекта. */
type UseInViewResponse<T> = [MutableRefObject<T | null>, boolean] & {
  /** DOM element you want to track. */
  ref: MutableRefObject<T | null>;
  /** Component's view status ('true' or 'false'). */
  inView: boolean;
};

/**
 * Custom hook that triggers the passed function when the element (trigger) intersects with the container element.
 *
 * This hook allows you to track the `inView` state of the component ('true' or 'false').
 * @returns {UseInViewResponse} Returns an object containing `ref` and `inView` status.
 * Assign `ref` to the DOM element you want to track and the hook will inform you about the status.
 * @example
 * ```tsx
 * import type { FC } from 'react';
 *
 * const Component: FC = () => {
 *   const { ref, inView } = useInView<HTMLDivElement>({
 *     triggerOnce: true,
 *     intersectionOptions: {
 *       threshold: 0.5,
 *     },
 *   });
 *
 *   return <div ref={ref}>{`Header inside viewport: ${inView}.`}</div>;
 * };
 * ```
 * ---
 * Works in the browser that initially supports Intersection Observer API.
 * @see Additional information: [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
 */

const useInView = <T extends HTMLElement>(
  { triggerOnce = false, callback, intersectionOptions }: UseInViewOptions = {},
  wrapperRef?: MutableRefObject<T | null>
): UseInViewResponse<T> => {
  const targetRef = useRef<T | null>(null);

  const [isInView, setIsInView] = useState(false);

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
    let intersectionObserver: IntersectionObserver;

    if (currentTargetRef) {
      const initOptions: IntersectionObserverInit = {
        root: wrapperRef?.current || null,
        rootMargin: '0px',
        threshold: 1.0,
      };

      intersectionObserver = new IntersectionObserver(handleIntersect, {
        ...initOptions,
        ...intersectionOptions,
      });
      intersectionObserver.observe(currentTargetRef);
    }

    return () => {
      if (currentTargetRef) {
        intersectionObserver.unobserve(currentTargetRef);
        intersectionObserver.disconnect();
      }
    };
  }, [handleIntersect, intersectionOptions, wrapperRef]);

  const result = [targetRef, isInView] as UseInViewResponse<T>;

  result.ref = targetRef;
  result.inView = isInView;

  return result;
};

export default useInView;
