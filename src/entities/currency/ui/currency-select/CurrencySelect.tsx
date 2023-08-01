import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { CurrencyEnum } from '../../model/types/currency-schema.interface';

import type { Profile } from '../../../profile/model/types/profile-schema.interface';

interface CurrencySelectProps {
  className?: string;
  value?: CurrencyEnum;
  readOnly?: boolean;
  onChangeProfileForm?: (value: CurrencyEnum, field: keyof Profile) => void;
}

const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
  const { className, value, readOnly, onChangeProfileForm } = props;

  const { t } = useTranslation('profile');

  const currencyOptions = useMemo(
    () => Object.entries(CurrencyEnum).map(([optionValue, content]) => ({ optionValue, content })),
    []
  );

  const handleChangeCurrency = useCallback(
    (valueCurrency: string) => {
      onChangeProfileForm?.(valueCurrency as CurrencyEnum, 'currency');
    },
    [onChangeProfileForm]
  );

  return (
    <Select
      className={cn('', {}, [className])}
      label={t('currency')}
      options={currencyOptions}
      value={value}
      readOnly={readOnly}
      onChange={handleChangeCurrency}
    />
  );
});

export default CurrencySelect;
