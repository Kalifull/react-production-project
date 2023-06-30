import { ChangeEvent, FC, memo, useMemo } from 'react';

import { CountryEnum } from '@/entities/country';
import { CurrencyEnum } from '@/entities/currency';

import { Mods, cn } from '../../lib';

import styles from './Select.module.scss';

interface SelectOptions<V = string, C = CountryEnum | CurrencyEnum> {
  optionValue: V;
  content: C;
}

interface SelectProps<ValueType = string> {
  className?: string;
  label?: string;
  value?: ValueType;
  options: SelectOptions<ValueType>[];
  readOnly?: boolean;
  onChange?: (value: ValueType) => void;
}

const Select: FC<SelectProps> = memo((props) => {
  const { className, label, options, value, readOnly, onChange } = props;

  const mods: Mods = {
    [styles.readonly]: readOnly,
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  const OptionsList = useMemo(() => {
    return options.map(({ optionValue, content }) => (
      <option key={optionValue} value={optionValue} className={cn(styles.option)}>
        {content}
      </option>
    ));
  }, [options]);

  return (
    <div className={cn(styles.wrapper, mods, [className])}>
      {label && <span className={cn(styles.label)}>{`${label}>`}</span>}
      <select
        name={value}
        value={value}
        className={cn(styles.select)}
        onChange={handleChange}
        disabled={readOnly}
      >
        {OptionsList}
      </select>
    </div>
  );
});

export default Select;
