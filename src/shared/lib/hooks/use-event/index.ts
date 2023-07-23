import { useCallback, useLayoutEffect, useRef } from 'react';

type Fn = (this: any, ...args: any[]) => any;

type PickFunction<T extends Fn> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

type useEventResponse<T extends (...args: any[]) => any> = (...args: Parameters<T>) => any;

const useEvent = <T extends (...args: any[]) => any>(fn: T | undefined): useEventResponse<T> => {
  const fnRef = useRef(fn);

  useLayoutEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const eventCallback = useCallback<PickFunction<T>>(
    (...args: Parameters<T>) => fnRef.current?.apply(null, args),
    [fnRef]
  );

  return eventCallback;
};

export default useEvent;
