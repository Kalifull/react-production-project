import { useCallback, useRef, useState, type MutableRefObject } from 'react';

import useEventListener from '../use-event-listener';

interface UseHoverOptions<T> {
  /** @param {MutableRefObject<T | null>} [options.element] The reference to the target element (optional). */
  element?: MutableRefObject<T | null>;
}

interface UseHoverResponse<T> {
  /** The reference to the target element. */
  ref: MutableRefObject<T | null>;
  /** A boolean indicating whether the element is being hovered over. */
  isHover: boolean;
}

/**
 * Custom hook that track whether the target element is being hovered over.
 *
 * @template T The type of the target element.
 * @return {UseHoverResponse} An object containing the ref to the target element and a boolean indicating whether the element is being hovered over.
 */

const useHover = <T extends HTMLElement>(options?: UseHoverOptions<T>): UseHoverResponse<T> => {
  const targetRef = useRef<T | null>(null);

  const element = options?.element ?? targetRef;

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHover(true), []);
  const handleMouseLeave = useCallback(() => setIsHover(false), []);

  useEventListener('mouseenter', handleMouseEnter, element);
  useEventListener('mouseleave', handleMouseLeave, element);

  return { ref: targetRef, isHover };
};

export default useHover;
