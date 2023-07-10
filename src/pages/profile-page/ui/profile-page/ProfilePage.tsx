import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { EditableProfileCard } from '@/features/editable-profile-card';

import {
  selectProfileError,
  selectProfileReadOnly,
  selectProfileIsLoading,
  selectValidationErrors,
  validateErrorTranslation,
} from '@/entities/profile';

import { TextVariantEnum } from '@/shared/api';

import { Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import { ProfilePageHeader } from '../profile-page-header/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
  const { fetchProfileData } = useActionCreators(allActions);

  const { t } = useTranslation('profile');

  const error = useAppSelector(selectProfileError);
  const readOnly = useAppSelector(selectProfileReadOnly);
  const isLoading = useAppSelector(selectProfileIsLoading);
  const validationErrors = useAppSelector(selectValidationErrors);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      fetchProfileData();
    }
  }, [fetchProfileData]);

  return (
    <div className={cn('', {}, [className])}>
      <ProfilePageHeader isLoading={isLoading} readOnly={readOnly} />
      {validationErrors?.length &&
        validationErrors.map((validateError) => (
          <Text
            key={validateError}
            variant={TextVariantEnum.ERROR}
            text={t(validateErrorTranslation[validateError])}
          />
        ))}
      <EditableProfileCard isLoading={isLoading} error={error} readOnly={readOnly} />
    </div>
  );
});

export default ProfilePage;
