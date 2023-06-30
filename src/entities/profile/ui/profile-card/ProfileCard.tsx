import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { TextVariantEnum } from '@/shared/api';

import { Input, Text, Loader, Avatar } from '@/shared/ui';

import { Mods, cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { allActions, useActionCreators } from '@/shared/lib/hooks';

import { CurrencySelect } from '../../../currency';
import { CountrySelect } from '../../../country';

import { profileReducer } from '../../model/slice/profile-slice';
import type { Profile } from '../../model/types/profile-schema.interface';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  formData?: Profile | null;
  isLoading?: boolean;
  error?: string | null;
  readOnly?: boolean;
}

const ProfileCard: FC<ProfileCardProps> = memo((props) => {
  const { className, formData, isLoading, error, readOnly } = props;

  const { t } = useTranslation('profile');

  const { updateProfileForm } = useActionCreators(allActions);

  const mods: Mods = {
    [styles.editing]: readOnly,
  };

  const handleChangeProfileForm = useCallback(
    (value: string, field: keyof Profile) => {
      if (field === 'age') {
        const validationValue = value.replace(/\D+/gm, '');
        updateProfileForm({ value: +validationValue, field });
      } else {
        updateProfileForm({ value, field });
      }
    },
    [updateProfileForm]
  );

  const ProfileForm = useMemo(() => {
    return (
      formData &&
      Object.entries(formData)
        .filter(([field]) => field !== 'currency' && field !== 'country')
        .map(([field, value]) => (
          <Input
            key={field}
            className={cn(styles.input)}
            type="text"
            field={field}
            value={value}
            placeholder={t(field)}
            onChangeProfileForm={handleChangeProfileForm}
            readOnly={readOnly}
          />
        ))
    );
  }, [formData, handleChangeProfileForm, readOnly, t]);

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
      {ProfileForm}
      <CurrencySelect
        className={cn(styles.input)}
        value={formData?.currency}
        readOnly={readOnly}
        onChangeProfileForm={handleChangeProfileForm}
      />
      <CountrySelect
        className={cn(styles.input)}
        value={formData?.country}
        readOnly={readOnly}
        onChangeProfileForm={handleChangeProfileForm}
      />
    </div>
  );
});

export default withAsyncReducers(ProfileCard, { reducers: { profileInfo: profileReducer } });
