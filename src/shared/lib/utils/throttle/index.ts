export const throttle = <T extends (...args: any[]) => any>(fn: T, ms: number) => {
  let isThrottled = false;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const throttledFn = (...args: any[]) => {
    if (!isThrottled) {
      fn(...args);
      isThrottled = true;

      timeoutId = setTimeout(() => {
        isThrottled = false;
      }, ms);
    }
  };

  throttledFn.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return throttledFn;
};
