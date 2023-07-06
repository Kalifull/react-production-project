import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { TextVariantEnum } from '@/shared/api';

import { Text, Loader, Avatar } from '@/shared/ui';

import { Mods, cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import { selectFormData } from '../../model/selectors/select-profile-state';
import { profileReducer } from '../../model/slice/profile-slice';

import { ProfileForm } from '../profile-form/ProfileForm';

import type { Profile } from '../../model/types/profile-schema.interface';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  isLoading?: boolean;
  error?: string | null;
  readOnly?: boolean;
}

const ProfileCard: FC<ProfileCardProps> = memo((props) => {
  const { className, isLoading, error, readOnly } = props;

  const { t } = useTranslation('profile');

  const { updateProfileForm } = useActionCreators(allActions);

  const formData = useAppSelector(selectFormData);

  const mods: Mods = {
    [styles.editing]: readOnly,
  };

  const handleChangeProfileForm = useCallback(
    (value: string, field: keyof Profile) => {
      const validationValue = value.replace(/\D+/gm, '');
      const currentValue = field === 'age' ? +validationValue : value;

      updateProfileForm({ value: currentValue, field });
    },
    [updateProfileForm]
  );

  if (isLoading) {
    return (
      <div className={cn(styles.card, {}, [className, styles.loader])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(styles.card, {}, [className, styles.error])}>
        <Text variant={TextVariantEnum.ERROR} title={t(error)} text={t('refreshPage')} />
      </div>
    );
  }

  return (
    <div className={cn(styles.card, mods, [className])}>
      <div className={cn(styles['avatar-wrapper'])}>
        <Avatar src={formData?.avatar} size={200} alt={t('avatar')} readOnly={readOnly} />
      </div>
      <ProfileForm
        formData={formData}
        readOnly={readOnly}
        onChangeProfileForm={handleChangeProfileForm}
      />
    </div>
  );
});

export default withAsyncReducers(ProfileCard, { reducers: { profileInfo: profileReducer } });
