import { useCallback, MutableRefObject, RefCallback } from 'react';

type Ref<T> = ((element: T | null) => void) | MutableRefObject<T | null> | null | undefined;

const useCombinedRef = <T>(...refs: Ref<T>[]): RefCallback<T> => {
  const combinedRef = useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (!ref) {
          return;
        }

        if (typeof ref === 'function') {
          ref(element);
        } else if (Object.prototype.hasOwnProperty.call(ref, 'current')) {
          ref.current = element;
        }
      });
    },
    [refs]
  );

  return combinedRef;
};

export default useCombinedRef;
