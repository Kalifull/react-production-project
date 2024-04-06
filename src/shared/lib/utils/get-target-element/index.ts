import type { MutableRefObject } from 'react';

/**
 * Checks if the given value is a function.
 *
 * @param {unknown} value The value to be checked.
 * @return {boolean} Returns `true` if the value is a function, `false` otherwise.
 */

const isFunction = (value: unknown): value is (...args: any[]) => any =>
  typeof value === 'function';

const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

type TargetValue<T> = T | undefined | null;

type TargetType = HTMLElement | Element | Window | Document;

export type BasicTarget<T extends TargetType = Element> =
  | (() => TargetValue<T>)
  | TargetValue<T>
  | MutableRefObject<TargetValue<T>>;

/**
 * Returns the target element based on the given target parameter.
 *
 * @param {BasicTarget<T>} target The target element or a function that returns the target element.
 * @param {T} defaultElement The default element to return if the target is falsy.
 * @return {TargetValue<T>} The target element.
 */

export const getTargetElement = <T extends TargetType>(
  target: BasicTarget<T>,
  defaultElement?: T
): TargetValue<T> => {
  if (!isBrowser) {
    return undefined;
  }

  if (!target) {
    return defaultElement;
  }

  let targetElement: TargetValue<T>;

  if (isFunction(target)) {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
};
