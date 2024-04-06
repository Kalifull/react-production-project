interface ThrottleFnResponse {
  /** The throttled function. */
  (...args: any[]): void;
  /** Cancels the operation. */
  cancel(): void;
}

/**
 * Returns a new function that, when invoked, will only be triggered at most once during a given window of time.
 *
 * @param {T} fn The function to be called in a throttled manner.
 * @param {number} ms The number of milliseconds to wait before allowing the function to be invoked again.
 * @return {(...args: any[]) => void} The throttled function.
 */

export const throttle = <T extends (...args: any[]) => any>(
  fn: T,
  ms: number
): ThrottleFnResponse => {
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
