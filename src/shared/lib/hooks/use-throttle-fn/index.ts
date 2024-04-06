import { useEffect, useMemo } from 'react';

import { useEvent } from '..';

import { throttle } from '../../utils';

export interface UseThrottleOptions {
  /** Throttle duration in milliseconds. */
  ms?: number;
}

/**
 * Custom hook that throttles the execution of a function.
 *
 * @param {Function} fn The function to be throttled.
 * @param {UseThrottleOptions} options Options for customizing the throttle behavior.
 * @return {T} The throttled function.
 */

const useThrottleFn = <T extends (...args: any[]) => any>(fn: T, options?: UseThrottleOptions) => {
  const memoizedFn = useEvent(fn);

  const ms = options?.ms ?? 1000;

  const throttledFn = useMemo(
    () => throttle((...args: Parameters<T>): T => memoizedFn(...args), ms),
    [memoizedFn, ms]
  );

  useEffect(() => () => throttledFn.cancel(), [throttledFn]);

  return throttledFn;
};

export default useThrottleFn;
