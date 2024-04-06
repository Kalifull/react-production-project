interface DebounceFnResponse {
  /** The debounced function. */
  (...args: any[]): void;
  /** Cancels the operation. */
  cancel(): void;
}

/**
 * Creates a debounced function that delays invoking the provided function until after `delay` milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @param {T} fn The function to debounce.
 * @param {number} delay The number of milliseconds to delay.
 * @return {(...args: any[]) => void} The debounced function.
 */

export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): DebounceFnResponse => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debouncedFn = (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  debouncedFn.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return debouncedFn;
};
