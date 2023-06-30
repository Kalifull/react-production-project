import { FC, memo, useEffect } from 'react';

import {
  ProfileCard,
  selectFormData,
  selectProfileError,
  selectProfileIsLoading,
  selectProfileReadOnly,
} from '@/entities/profile';

import { cn } from '@/shared/lib';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import { ProfilePageHeader } from '../profile-page-header/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
  const { fetchProfileData } = useActionCreators(allActions);

  const formData = useAppSelector(selectFormData);
  const isLoading = useAppSelector(selectProfileIsLoading);
  const error = useAppSelector(selectProfileError);
  const readOnly = useAppSelector(selectProfileReadOnly);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      fetchProfileData();
    }
  }, [fetchProfileData]);

  return (
    <div className={cn('', {}, [className])}>
      <ProfilePageHeader isLoading={isLoading} readOnly={readOnly} />
      <ProfileCard formData={formData} isLoading={isLoading} error={error} readOnly={readOnly} />
    </div>
  );
});

export default ProfilePage;
