import { ButtonHTMLAttributes, FC } from 'react';

import { ButtonSizeEnum, ButtonVariantEnum } from '@/shared/api';

import { cn } from '@/shared/lib';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariantEnum;
  square?: boolean;
  size?: ButtonSizeEnum;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, variant, square, size = ButtonSizeEnum.M, children, ...restProps } = props;

  const mods: Record<string, boolean> = {
    [styles.square]: square,
  };

  return (
    <button
      type="button"
      className={cn(styles.button, mods, [className, styles[variant], styles[size]])}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
