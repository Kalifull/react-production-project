import { ChangeEvent, FC, InputHTMLAttributes, SyntheticEvent, memo, useState } from 'react';

import { cn } from '@/shared/lib';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = memo((props) => {
  const { className, value, onChange, type = 'text', placeholder, ...restProps } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
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
    <div className={cn(styles.wrapper, {}, [className])}>
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
          {...restProps}
        />

        {isFocused && <span className={cn(styles.caret)} style={{ left: `${caretPosition}ch` }} />}
      </div>
    </div>
  );
});

export default Input;
