import { useCallback, useRef, useState, type MutableRefObject } from 'react';

import useEventListener from '../use-event-listener';

interface UseScrollPositionOptions<T> {
  /** @param {number} [options.delay] The delay in milliseconds. */
  delay?: number;
  /** @param {MutableRefObject<T | null>} [options.element] The reference to the target element (optional). */
  element?: MutableRefObject<T | null>;
}

interface ScrollInfo {
  /** The current scroll position. */
  position: {
    /** The current horizontal scroll position. */
    x: number;
    /** The current vertical scroll position. */
    y: number;
  };
  /** The current scroll state. */
  isScrolling: boolean;
}

interface UseScrollPositionResponse<T> {
  /** The reference to the target element. */
  ref: MutableRefObject<T | null>;
  /** The scroll information. */
  scrollInfo: ScrollInfo;
}

/**
 * Custom hook for track the scroll position of a specified target element.
 *
 * @return {UseScrollPositionResponse<T>} An object containing a reference to the target element and scroll information.
 */

const useScrollPosition = <T extends HTMLElement>(
  options?: UseScrollPositionOptions<T>
): UseScrollPositionResponse<T> => {
  const targetRef = useRef<T | null>(null);

  const delay = options?.delay ?? 250;
  const element = options?.element ?? targetRef;

  const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
    position: { x: 0, y: 0 },
    isScrolling: false,
  });

  const handleScroll = useCallback(() => {
    if (element.current) {
      let timeoutId: ReturnType<typeof setTimeout> | null = null;

      const { scrollLeft, scrollTop } = element.current;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      setScrollInfo({
        position: { x: scrollLeft, y: scrollTop },
        isScrolling: true,
      });

      timeoutId = setTimeout(
        () =>
          setScrollInfo((prev) => ({
            ...prev,
            isScrolling: false,
          })),
        delay
      );
    }
  }, [delay, element]);

  useEventListener('scroll', handleScroll, element);

  return { ref: element, scrollInfo };
};

export default useScrollPosition;
