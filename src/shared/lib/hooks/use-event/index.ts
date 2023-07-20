import { useCallback, useLayoutEffect, useRef } from 'react';

const useEvent = <T extends (...args: any[]) => any>(fn: T | undefined) => {
  const fnRef = useRef(fn);

  useLayoutEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const eventCallback = useCallback(
    (...args: Parameters<T>) => {
      return fnRef.current?.apply(null, args);
    },
    [fnRef]
  );

  return eventCallback;
};

export default useEvent;
