import { useEffect, useMemo } from 'react';

import { useEvent } from '..';

import { debounce } from '../../utils';

export interface UseDebounceOptions {
  /** @param {number} [options.delay] Debounce duration in milliseconds. */
  delay?: number;
}

/**
 * Custom hook that debounces a function with the provided options.
 *
 * @param {Function} fn The input function to be debounced.
 * @param {useDebounceOptions} options The options for debouncing.
 * @return {T} The debounced version of the input function.
 */

const useDebounceFn = <T extends (...args: any[]) => any>(fn: T, options?: UseDebounceOptions) => {
  const memoizedFn = useEvent(fn);

  const delay = options?.delay ?? 1000;

  const debouncedFn = useMemo(
    () => debounce((...args: Parameters<T>): T => memoizedFn(...args), delay),
    [memoizedFn, delay]
  );

  useEffect(() => () => debouncedFn.cancel(), [debouncedFn]);

  return debouncedFn;
};

export default useDebounceFn;
