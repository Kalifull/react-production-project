import { type FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Popup } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { CountryEnum } from '../../model/constants/const-country';

import type { Profile } from '../../../profile/model/types/profile.interface';

interface CountrySelectProps {
  className?: string;
  value?: CountryEnum;
  readOnly?: boolean;
  onChangeProfileForm?: (value: CountryEnum, field: keyof Profile) => void;
}

const CountrySelect: FC<CountrySelectProps> = memo((props) => {
  const { className, value, readOnly, onChangeProfileForm } = props;

  const { t } = useTranslation('profile');

  const direction = __PROJECT__ === 'storybook' ? 'bottom-left' : 'top-left';

  const countryOptions = useMemo(
    () =>
      Object.entries(CountryEnum).map(([optionValue, content], index) => ({
        id: index,
        optionValue,
        content,
      })),
    []
  );

  const handleChangeCountry = useCallback(
    (valueCountry: string) => onChangeProfileForm?.(valueCountry as CountryEnum, 'country'),
    [onChangeProfileForm]
  );

  return (
    <Popup>
      <Popup.Listbox
        className={cn('', {}, [className])}
        label={t('country')}
        value={value}
        defaultValue={t('country')}
        options={countryOptions}
        readOnly={readOnly}
        direction={direction}
        onChange={handleChangeCountry}
      />
    </Popup>
  );
});

export default CountrySelect;
