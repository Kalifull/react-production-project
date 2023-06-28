import { FC, memo } from 'react';

import { ProfileCard, profileReducer } from '@/entities/profile';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
  return (
    <div className={cn('', {}, [className])}>
      <ProfileCard />
    </div>
  );
});

export default withAsyncReducers(ProfilePage, { reducers: { profileInfo: profileReducer } });
