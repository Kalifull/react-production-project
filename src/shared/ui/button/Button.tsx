import { ButtonHTMLAttributes, FC } from 'react';

import { ThemeButtonEnum } from '@/shared/api';

import { cn } from '@/shared/lib';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ThemeButtonEnum;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, variant = ThemeButtonEnum.CLEAR, children, ...restProps } = props;

  return (
    <button className={cn(styles.button, {}, [className, styles[variant]])} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
