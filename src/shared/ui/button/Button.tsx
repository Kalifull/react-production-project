import { ButtonHTMLAttributes, FC } from 'react';

import { ButtonVariantEnum } from '@/shared/api';

import { cn } from '@/shared/lib';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariantEnum;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, variant, children, ...restProps } = props;

  return (
    <button
      type="button"
      className={cn(styles.button, {}, [className, styles[variant]])}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
