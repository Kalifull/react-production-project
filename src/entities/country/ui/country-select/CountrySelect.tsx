import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { CountryEnum } from '../../model/types/country-schema.interface';

import type { Profile } from '../../../profile/model/types/profile-schema.interface';

interface CountrySelectProps {
  className?: string;
  value?: CountryEnum;
  readOnly?: boolean;
  onChangeProfileForm?: (value: CountryEnum, field: keyof Profile) => void;
}

const CountrySelect: FC<CountrySelectProps> = memo((props) => {
  const { className, value, readOnly, onChangeProfileForm } = props;

  const { t } = useTranslation('profile');

  const countryOptions = useMemo(
    () => Object.entries(CountryEnum).map(([optionValue, content]) => ({ optionValue, content })),
    []
  );

  const handleChangeCountry = useCallback(
    (valueCountry: string) => {
      onChangeProfileForm?.(valueCountry as CountryEnum, 'country');
    },
    [onChangeProfileForm]
  );

  return (
    <Select
      className={cn('', {}, [className])}
      label={t('country')}
      options={countryOptions}
      value={value}
      readOnly={readOnly}
      onChange={handleChangeCountry}
    />
  );
});

export default CountrySelect;
