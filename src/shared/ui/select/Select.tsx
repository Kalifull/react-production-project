import { ChangeEvent, memo, useMemo } from 'react';

import type { SelectOptions } from '../../api';
import { Mods, cn } from '../../lib';

import styles from './Select.module.scss';

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  value?: T;
  options: SelectOptions<T>[];
  readOnly?: boolean;
  onChange?: (value: T) => void;
}

const typedMemo: <T>(c: T) => T = memo;

const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, readOnly, onChange } = props;

  const mods: Mods = {
    [styles.readonly]: readOnly,
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T);
  };

  const optionsList = useMemo(
    () =>
      options.map(({ optionValue, content }) => (
        <option key={optionValue} value={optionValue} className={cn(styles.option)}>
          {content}
        </option>
      )),
    [options]
  );

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
        {optionsList}
      </select>
    </div>
  );
});

export default Select;
