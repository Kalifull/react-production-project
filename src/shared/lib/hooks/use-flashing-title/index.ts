import { useCallback, useEffect, useRef } from 'react';

import { getNotificationMessage } from '../../utils/get-notification-message';

import useEventListener from '../use-event-listener';

export interface UseFlashingTitleResponse {
  /**
   * Function for calling tab flashing when a new notification appears in the browser.
   * @param {number} notificationCounts The number of notifications.
   */
  startFlashing: (notificationCounts: number) => void;
  /** Function for calling stopping tab flashing in the browser. */
  stopFlashing: () => void;
}

interface UseFlashingTitleOptions {
  /** @param {number} [options.intervalDuration] Tab flashing interval duration. */
  intervalDuration?: number;
  /** @param {number} [options.unreadNotificationCounts] Number of new unread notifications. */
  unreadNotificationCounts?: number;
}

/**
 * Custom hook for implementing tab flashing when a new notification appears in the browser.
 *
 * This hook allows you to notify the user about new notifications in the browser by flashing the tab.
 * @returns {UseFlashingTitleResponse} Functions to start and stop tab flashing in the browser.
 */

const useFlashingTitle = (options: UseFlashingTitleOptions): UseFlashingTitleResponse => {
  const documentRef = useRef<Document>(document);
  const originalTitleRef = useRef<string>(document.title);
  const flashIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const intervalDuration = options?.intervalDuration ?? 1000;
  const unreadNotificationCounts = options?.unreadNotificationCounts ?? 0;

  const startFlashing = useCallback(
    (notificationCounts: number) => {
      flashIntervalRef.current = setInterval(() => {
        document.title =
          document.title === originalTitleRef.current
            ? getNotificationMessage(notificationCounts)
            : originalTitleRef.current;
      }, intervalDuration);
    },
    [intervalDuration]
  );

  const stopFlashing = useCallback(() => {
    if (flashIntervalRef.current) {
      clearInterval(flashIntervalRef.current);
      flashIntervalRef.current = null;
    }

    document.title = originalTitleRef.current;
  }, []);

  const handleVisibilityChange = useCallback(() => {
    if (document.visibilityState === 'hidden' && unreadNotificationCounts) {
      startFlashing(unreadNotificationCounts);
    }

    if (document.visibilityState === 'visible') {
      stopFlashing();
    }
  }, [startFlashing, stopFlashing, unreadNotificationCounts]);

  useEventListener('visibilitychange', handleVisibilityChange, documentRef);

  useEffect(() => {
    if (document.visibilityState === 'hidden' && unreadNotificationCounts) {
      startFlashing(unreadNotificationCounts);
    } else {
      stopFlashing();
    }
  }, [startFlashing, stopFlashing, unreadNotificationCounts]);

  return { startFlashing, stopFlashing };
};

export default useFlashingTitle;
