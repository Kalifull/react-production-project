import { useEffect, useState } from 'react';

interface useMountTransitionOptions {
  isMounted: boolean;
  unmountDelay?: number;
}

interface useMountTransitionResponse {
  isTransitioned: boolean;
}

const useMountTransition = ({
  isMounted,
  unmountDelay = 1000,
}: useMountTransitionOptions): useMountTransitionResponse => {
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
