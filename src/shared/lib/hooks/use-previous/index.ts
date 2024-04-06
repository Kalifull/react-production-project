import { useLayoutEffect, useRef, type MutableRefObject } from 'react';

/**
 * Custom hook that access previous props or state of functional components.
 *
 * This hook will work for props, state, or any other computed value.
 * This can be particularly useful in scenarios where it is necessary to compare the current value with the previous one, for example, when triggering actions or rendering based on changes.
 *
 * @param {T} value New value to track and return the previous value.
 * @returns {MutableRefObject<T | null>} The state/prop value needed for the previous value.
 */

const usePrevious = <T>(value: T): MutableRefObject<T | null> => {
  const previousValue = useRef<T | null>(null);

  useLayoutEffect(() => {
    previousValue.current = value;
  }, [value]);

  return previousValue;
};

export default usePrevious;
