import { useEffect, useMemo } from 'react';

import { useEvent } from '..';

import { debounce } from '../../utils';

export interface useDebounceOptions {
  delay?: number;
}

const useDebounceFn = <T extends (...args: any[]) => any>(fn: T, options?: useDebounceOptions) => {
  const memoizedFn = useEvent(fn);

  const delay = options?.delay ?? 1000;

  const debouncedFn = useMemo(
    () => debounce((...args: Parameters<T>): T => memoizedFn(...args), delay),
    [memoizedFn, delay]
  );

  useEffect(
    () => () => {
      debouncedFn.cancel();
    },
    [debouncedFn]
  );

  return debouncedFn;
};

export default useDebounceFn;
