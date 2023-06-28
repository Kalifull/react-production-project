import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonVariantEnum } from '@/shared/api';

import { Button, Input, Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import {
  selectProfileData,
  selectProfileIsLoading,
  selectProfileError,
} from '../../model/selectors/select-profile-state';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

const ProfileCard: FC<ProfileCardProps> = memo(({ className }) => {
  const { t } = useTranslation('profile');

  const { fetchProfileData } = useActionCreators(allActions);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  const profileData = useAppSelector(selectProfileData);
  const isLoading = useAppSelector(selectProfileIsLoading);
  const error = useAppSelector(selectProfileError);

  return (
    <div className={cn(styles.card, {}, [className])}>
      <div className={cn(styles.header)}>
        <Text title={t('profileUser')} />
        <Button className={cn(styles.button)} variant={ButtonVariantEnum.OUTLINE}>
          {t('edit')}
        </Button>
      </div>
      <div className={cn(styles.data)}>
        <Input
          className={cn(styles.input)}
          type="text"
          value={profileData?.firstName}
          placeholder={t('firstName')}
        />
        <Input
          className={cn(styles.input)}
          type="text"
          value={profileData?.lastName}
          placeholder={t('lastName')}
        />
      </div>
    </div>
  );
});

export default ProfileCard;
