import { type FC, memo, useEffect } from 'react';

import { Page } from '@/widgets/page';

import { useActivityTime } from '@/shared/lib/hooks';

const MainPage: FC = memo(() => {
  const { isVisible, activityTime } = useActivityTime();

  useEffect(() => {
    if (!isVisible && activityTime > 0) {
      console.log('activityTime', activityTime);
    }
  }, [isVisible, activityTime]);

  return <Page>{activityTime}</Page>;
});

export default MainPage;
