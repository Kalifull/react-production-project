import { useEffect } from 'react';

interface PushNotification {
  /** @param {string} notification.title The title of the notification. */
  title: string;
  /** @param {NotificationOptions} notification.options Additional options. */
  options?: NotificationOptions;
}

type UsePushNotificationResponse = (notification: PushNotification) => void;

/** Function for requesting permission to send notifications.
 * @returns {Promise<NotificationPermission>} Permission for notifications ('default', 'denied' or 'granted').
 * ---
 * @see Additional information: [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission).
 */

const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (!('Notification' in window)) {
    return 'denied';
  }

  const permission = await Notification.requestPermission();

  return permission;
};

/** Function for sending push notification.
 * @param {PushNotification} notification Notification object.
 * @param {string} notification.title Notification title.
 * @param {NotificationOptions} notification.options Additional options.
 */

const sendPushNotification = ({ title, options }: PushNotification): void => {
  // If permission to send notifications has already been granted, send notification
  if (Notification.permission === 'granted') {
    new Notification(title, options);
  }

  if (Notification.permission === 'default') {
    // If user has not made a decision yet, request permission
    requestNotificationPermission()
      .then((permission) => {
        if (permission === 'granted') {
          // Permission granted, send notification
          new Notification(title, options);
        }

        console.warn('User has denied permission to notification');
      })
      .catch((error) => console.error('Error when requesting permission', error));
  }
};

/**
 * Custom hook for sending push notifications in the browser.
 *
 * This hook allows you to send push notifications in the browser and manage user notification permissions.
 * It simplifies sending notifications with `new Notification()` and handles permission for showing notifications.
 * @returns {UsePushNotificationResponse} Function to send notifications.
 * @example
 * ```tsx
 * const sendPushNotification = usePushNotification();
 *
 * sendPushNotification({
 *   title: 'Notification title',
 *   options: {
 *     body: 'This is an example of push notification in the browser using a hook.',
 *     icon: 'path_to_icon.png',
 *   },
 * });
 * ```
 * ---
 * Works in browsers that support the Web Notifications API initially.
 * @see Additional information: [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Notification).
 */

const usePushNotification = (): UsePushNotificationResponse => {
  useEffect(() => {
    // Check browser support for Web Notifications
    if (!('Notification' in window)) {
      console.error('This browser does not support Web Notifications');
    }
  }, []);

  return sendPushNotification;
};

export default usePushNotification;
