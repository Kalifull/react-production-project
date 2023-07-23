import { FC, ForwardedRef, HTMLAttributes, forwardRef, memo } from 'react';

import { TextVariantEnum, TextAlignEnum, TextSizeEnum } from '../../api';

import { cn } from '../../lib';

import styles from './Text.module.scss';

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  title?: string;
  text?: string;
  size?: TextSizeEnum;
  variant?: TextVariantEnum;
  align?: TextAlignEnum;
  ref?: ForwardedRef<HTMLDivElement>;
}

const Text: FC<TextProps> = memo(
  forwardRef((props, ref) => {
    const {
      className,
      title,
      text,
      size = TextSizeEnum.M,
      variant = TextVariantEnum.PRIMARY,
      align = TextAlignEnum.CENTER,
      ...restProps
    } = props;

    return (
      <div
        ref={ref}
        className={cn('', {}, [className, styles[variant], styles[align], styles[size]])}
        {...restProps}
      >
        {title && <p className={cn(styles.title)}>{title}</p>}
        {text && <p className={cn(styles.text)}>{text}</p>}
      </div>
    );
  })
);

export default Text;
