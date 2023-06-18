import { useEffect, useState } from 'react';

const useMountTransition = (isMounted: boolean, unmountDelay: number) => {
  const [hasTransitioned, setHasTransitioned] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isMounted && !hasTransitioned) {
      setHasTransitioned(true);
    } else if (!isMounted && hasTransitioned) {
      timeoutId = setTimeout(() => setHasTransitioned(false), unmountDelay);
    }

    return () => clearTimeout(timeoutId);
  }, [isMounted, hasTransitioned, unmountDelay]);

  return hasTransitioned;
};

export default useMountTransition;
