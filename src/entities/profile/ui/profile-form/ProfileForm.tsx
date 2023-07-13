import FocusLock from 'react-focus-lock';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { CurrencySelect } from '../../../currency';
import { CountrySelect } from '../../../country';

import type { Profile } from '../../model/types/profile-schema.interface';

import styles from './ProfileForm.module.scss';

interface ProfileFormProps {
  className?: string;
  formData?: Profile | null;
  readOnly?: boolean;
  onChangeProfileForm?: (value: string, field: keyof Profile) => void;
}

const ProfileForm: FC<ProfileFormProps> = memo((props) => {
  const { className, formData, readOnly, onChangeProfileForm } = props;

  const { t } = useTranslation('profile');

  const handleChangeProfileForm = useCallback(
    (value: string, field: keyof Profile) => {
      onChangeProfileForm?.(value, field);
    },
    [onChangeProfileForm]
  );

  return (
    <FocusLock>
      <div className={cn(styles.form, {}, [className])}>
        {formData &&
          Object.entries(formData)
            .filter(([field]) => field !== 'id' && field !== 'currency' && field !== 'country')
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
            ))}
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
    </FocusLock>
  );
});

export default ProfileForm;
