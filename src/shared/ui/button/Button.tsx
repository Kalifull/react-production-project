import { ButtonHTMLAttributes, FC, memo } from 'react';

import { ButtonSizeEnum, ButtonVariantEnum } from '@/shared/api';

import { cn } from '@/shared/lib';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariantEnum;
  square?: boolean;
  size?: ButtonSizeEnum;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    variant,
    square,
    size = ButtonSizeEnum.M,
    disabled,
    children,
    ...restProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles.square]: square,
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={cn(styles.button, mods, [className, styles[variant], styles[size]])}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
});

export default Button;
