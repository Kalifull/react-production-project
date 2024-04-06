import { useEffect, useState } from 'react';

interface UseMountTransitionOptions {
  /** @param {boolean} [options.isMounted] Whether the component is currently mounted. */
  isMounted: boolean;
  /** @param {number} [options.unmountDelay] Delay before unmounting the component. */
  unmountDelay?: number;
}

interface UseMountTransitionResponse {
  /** Whether the component is currently transitioning. */
  isTransitioned: boolean;
}

/**
 * Custom hook that generates a transition effect based on mount and unmount states.
 *
 * @param {UseMountTransitionOptions} options - Options for the mount transition.
 * @return {UseMountTransitionResponse} Object containing transition state.
 */

const useMountTransition = ({
  isMounted,
  unmountDelay = 1000,
}: UseMountTransitionOptions): UseMountTransitionResponse => {
  const [isTransitioned, setIsTransitioned] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isMounted && !isTransitioned) {
      setIsTransitioned(true);
    } else if (!isMounted && isTransitioned) {
      timeoutId = setTimeout(() => setIsTransitioned(false), unmountDelay);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isMounted, isTransitioned, unmountDelay]);

  return { isTransitioned };
};

export default useMountTransition;
