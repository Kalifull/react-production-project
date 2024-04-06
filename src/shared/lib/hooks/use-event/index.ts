import { useCallback } from 'react';

import usePrevious from '../use-previous';

type Fn = (this: any, ...args: any[]) => any;

type PickFunction<T extends Fn> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

type UseEventResponse<T extends (...args: any[]) => any> = (...args: Parameters<T>) => any;

/**
 * Custom hook that takes a function and returns a memoized version of it that always has the latest version of the function.
 *
 * @param {T} fn The function to be memoized.
 * @return {UseEventResponse} The memoized version of the input function.
 */

const useEvent = <T extends (...args: any[]) => any>(fn?: T): UseEventResponse<T> => {
  const previousFn = usePrevious(fn);

  const eventCallback = useCallback<PickFunction<T>>(
    (...args: Parameters<T>) => previousFn.current?.apply(null, args),
    [previousFn]
  );

  return eventCallback;
};

export default useEvent;
