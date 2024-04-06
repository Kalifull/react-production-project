/**
 * Returns a notification message based on the number of notifications.
 *
 * @param {number} notificationCounts - The number of notifications.
 * @return {string} The notification message.
 */

export const getNotificationMessage = (notificationCounts: number): string => {
  if (notificationCounts > 99) {
    return '99+ новых уведомлений';
  }

  const lastTwoDigits = notificationCounts % 100;
  const lastDigit = lastTwoDigits % 10;

  const isElevenToTwenty = lastTwoDigits >= 11 && lastTwoDigits <= 20;

  if (isElevenToTwenty || lastDigit === 0 || (lastDigit >= 5 && lastDigit <= 9)) {
    return `${notificationCounts} новых уведомлений`;
  }

  if (lastDigit === 1) {
    return `${notificationCounts} новое уведомление`;
  }

  return `${notificationCounts} новых уведомления`;
};
