import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Popup } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { CurrencyEnum } from '../../model/constants/const-currency';

import type { Profile } from '../../../profile/model/types/profile.interface';

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
    () =>
      Object.entries(CurrencyEnum).map(([optionValue, content], index) => ({
        id: index,
        optionValue,
        content,
      })),
    []
  );

  const handleChangeCurrency = useCallback(
    (valueCurrency: string) => {
      onChangeProfileForm?.(valueCurrency as CurrencyEnum, 'currency');
    },
    [onChangeProfileForm]
  );

  return (
    <Popup>
      <Popup.Listbox
        className={cn('', {}, [className])}
        label={t('currency')}
        value={value}
        defaultValue={t('currency')}
        options={currencyOptions}
        readOnly={readOnly}
        direction={__PROJECT__ === 'storybook' ? 'bottom-left' : 'top-left'}
        onChange={handleChangeCurrency}
      />
    </Popup>
  );
});

export default CurrencySelect;
