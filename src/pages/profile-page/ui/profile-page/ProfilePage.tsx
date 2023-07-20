import { FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

import { Page, Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import { ProfilePageHeader } from '../profile-page-header/ProfilePageHeader';

import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

type PageParams = {
  id: string;
};

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
  const { t } = useTranslation('profile');
  const { id } = useParams<PageParams>();

  const { fetchProfileData } = useActionCreators(allActions);

  const error = useAppSelector(selectProfileError);
  const readOnly = useAppSelector(selectProfileReadOnly);
  const isLoading = useAppSelector(selectProfileIsLoading);
  const validationErrors = useAppSelector(selectValidationErrors);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      fetchProfileData(id);
    }
  }, [fetchProfileData, id]);

  return (
    <Page className={cn(styles['profile-page'], {}, [className])}>
      <ProfilePageHeader isLoading={isLoading} readOnly={readOnly} />
      {validationErrors?.length &&
        validationErrors.map((validateError) => (
          <Text
            key={validateError}
            className={cn(styles.error)}
            variant={TextVariantEnum.ERROR}
            text={t(validateErrorTranslation[validateError])}
          />
        ))}
      <EditableProfileCard isLoading={isLoading} error={error} readOnly={readOnly} />
    </Page>
  );
});

export default ProfilePage;
