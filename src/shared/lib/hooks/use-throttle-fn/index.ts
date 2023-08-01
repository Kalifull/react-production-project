import { useEffect, useMemo } from 'react';

import { useEvent } from '..';

import { throttle } from '../../utils';

export interface useThrottleOptions {
  ms?: number;
}

const useThrottleFn = <T extends (...args: any[]) => any>(fn: T, options?: useThrottleOptions) => {
  const memoizedFn = useEvent(fn);

  const ms = options?.ms ?? 1000;

  const throttledFn = useMemo(
    () => throttle((...args: Parameters<T>): T => memoizedFn(...args), ms),
    [memoizedFn, ms]
  );

  useEffect(
    () => () => {
      throttledFn.cancel();
    },
    [throttledFn]
  );

  return throttledFn;
};

export default useThrottleFn;
