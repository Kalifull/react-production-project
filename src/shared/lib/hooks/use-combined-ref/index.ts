import { ForwardedRef, MutableRefObject, RefCallback, useCallback } from 'react';

const useCombinedRef = <T = any>(
  ...refs: Array<MutableRefObject<T> | ForwardedRef<T>>
): RefCallback<T> => {
  const combinedRef = useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (!ref) {
          return;
        }

        if (typeof ref === 'function') {
          ref(element);
        } else if (ref) {
          ref.current = element;
        }
      });
    },
    [refs]
  );

  return combinedRef;
};

export default useCombinedRef;
