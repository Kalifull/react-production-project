import { ChangeEvent, FC, InputHTMLAttributes, SyntheticEvent, memo, useState } from 'react';

import { Profile } from '@/entities/profile';

import { Mods, cn } from '../../lib';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  field?: string;
  value?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
  onChangeProfileForm?: (value: string, field: keyof Profile) => void;
}

const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    type = 'text',
    field,
    value,
    readOnly,
    placeholder,
    onChange,
    onChangeProfileForm,
    ...restProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState<number | null>(0);

  const mods: Mods = {
    [styles.readonly]: readOnly,
  };

  const isCaretVisible = isFocused && !readOnly;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    onChangeProfileForm?.(event.target.value, field as keyof Profile);

    setCaretPosition(event.target.selectionStart);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleSelect = (event: SyntheticEvent<HTMLInputElement, Event>) => {
    setCaretPosition(event.currentTarget.selectionStart);
  };

  return (
    <div className={cn(styles.wrapper, mods, [className])}>
      {placeholder && <div className={cn(styles.placeholder)}>{`${placeholder}>`}</div>}
      <div className={cn(styles['wrapper-caret'])}>
        <input
          className={cn(styles.input)}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onSelect={handleSelect}
          readOnly={readOnly}
          {...restProps}
        />

        {isCaretVisible && (
          <span className={cn(styles.caret)} style={{ left: `${caretPosition}ch` }} />
        )}
      </div>
    </div>
  );
});

export default Input;
