import { useCallback, type RefCallback, type MutableRefObject } from 'react';

type Ref<T> = ((element: T | null) => void) | MutableRefObject<T | null> | null | undefined;

/**
 * Custom hook that creates a combined ref callback that calls all the input refs with the given element.
 *
 * @param {Ref} refs The input refs to be combined.
 * @return {RefCallback} The combined ref callback.
 */

const useCombinedRef = <T>(...refs: Ref<T>[]): RefCallback<T> => {
  const combinedRef = useCallback(
    (element: T) =>
      refs.forEach((ref) => {
        if (!ref) {
          return;
        }

        if (typeof ref === 'function') {
          ref(element);
        } else if (Object.prototype.hasOwnProperty.call(ref, 'current')) {
          ref.current = element;
        }
      }),
    [refs]
  );

  return combinedRef;
};

export default useCombinedRef;
