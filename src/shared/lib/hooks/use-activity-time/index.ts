import { useCallback, useEffect, useRef, useState } from 'react';

import useEventListener from '../use-event-listener/index';

interface UseActivityTimeResponse {
  /** The visibility state. */
  isVisible: boolean;
  /** The activity time in seconds. */
  activityTime: number;
}

/**
 * Custom hook that returns the current visibility state of the document and the activity time in seconds.
 *
 * @return {UseActivityTimeResponse} The visibility state and activity time in seconds.
 */

const useActivityTime = (): UseActivityTimeResponse => {
  const documentRef = useRef<Document>(document);
  const startTimeRef = useRef<number>(Date.now());
  const channel = useRef<BroadcastChannel>(new BroadcastChannel('page-visibility-channel'));

  const [activityTime, setActivityTime] = useState<number>(0);

  const [isVisible, setIsVisible] = useState<boolean>(document.visibilityState === 'visible');

  const handleVisibilityChange = useCallback(() => {
    const currentTime = Date.now();

    if (document.visibilityState === 'visible') {
      startTimeRef.current = currentTime;
    } else {
      const elapsedTime = currentTime - startTimeRef.current;
      const activityTimeInSeconds = Math.round(elapsedTime / 1000);

      setActivityTime(activityTimeInSeconds);
    }

    channel.current.postMessage({ isVisible: document.visibilityState === 'visible' });
    setIsVisible(document.visibilityState === 'visible');
  }, []);

  useEventListener('visibilitychange', handleVisibilityChange, documentRef);

  const handleChannelMessage = useCallback(({ data }: MessageEvent<{ isVisible: boolean }>) => {
    if (!data.isVisible) {
      setActivityTime(0);
      startTimeRef.current = Date.now();
    }

    setIsVisible(data.isVisible);
  }, []);

  useEffect(() => {
    const broadcastChannel = channel.current;

    broadcastChannel.addEventListener('message', handleChannelMessage);

    return () => broadcastChannel.removeEventListener('message', handleChannelMessage);
  }, [handleChannelMessage]);

  return { isVisible, activityTime };
};

export default useActivityTime;
