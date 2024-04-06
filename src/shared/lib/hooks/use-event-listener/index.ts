import { type RefObject, useEffect } from 'react';

import useEvent from '../use-event';

import { getTargetElement } from '../../utils';

type EventMapUnion = WindowEventMap & DocumentEventMap;

type EventType = keyof EventMapUnion;

type EventHandler<T extends EventType> = T extends EventType ? EventMapUnion[T] : Event;

type Listener = <T extends EventType>(event: EventHandler<T>) => void;

type useEventListenerResponse = void;

/**
 * Custom hook that attaches event listeners to DOM elements or the window.
 *
 * @param {Type} eventType The type of window event to listen for.
 * @param {function} listener The callback function to be executed when the event occurs.
 * @param {AddEventListenerOptions | boolean} [options] Optional parameters for the event listener.
 * @param {RefObject<T>} [element] The DOM element or media query list to attach the event listener to (optional).
 * @example
 * ```tsx
 * // Example 1: Attach a window event listener
 * useEventListener('resize', handleResize);
 * ```
 * @example
 * ```tsx
 * // Example 2: Attach a document event listener with options
 * const elementRef = useRef(document);
 * useEventListener('click', handleClick, elementRef, { capture: true });
 * ```
 * @example
 * ```tsx
 * // Example 3: Attach an element event listener
 * const buttonRef = useRef<HTMLButtonElement>(null);
 * useEventListener('click', handleButtonClick, buttonRef);
 * ```
 * @return {useWindowEventResponse} The response object containing the listener function and cleanup function.
 */

function useEventListener<T extends EventType>(
  eventType: T,
  listener: Listener,
  element?: RefObject<HTMLElement | Window | Document>,
  options?: AddEventListenerOptions | boolean
): void;

function useEventListener<T extends string>(
  eventType: T,
  listener: Listener,
  element?: RefObject<HTMLElement | Window | Document>,
  options?: AddEventListenerOptions | boolean
): void;

function useEventListener<T extends EventType>(
  eventType: T,
  listener: Listener,
  element?: RefObject<HTMLElement | Window | Document>,
  options?: AddEventListenerOptions | boolean
): useEventListenerResponse {
  const listenerFn = useEvent(listener);

  useEffect(() => {
    const targetElement = getTargetElement(element, window);

    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    const eventListener: EventListenerOrEventListenerObject = (event: Event) => listenerFn(event);

    targetElement.addEventListener(eventType, eventListener, options);

    return () => targetElement.removeEventListener(eventType, eventListener, options);
  }, [eventType, options, element, listenerFn]);
}

export default useEventListener;
