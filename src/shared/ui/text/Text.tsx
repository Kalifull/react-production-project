import { FC, ForwardedRef, HTMLAttributes, forwardRef, memo } from 'react';

import { TextVariantEnum, TextAlignEnum, TextSizeEnum } from '../../api';
import { Tag } from '..';
import { cn } from '../../lib';

import styles from './Text.module.scss';

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  titleTag?: keyof JSX.IntrinsicElements;
  title?: string;
  text?: string;
  size?: TextSizeEnum;
  variant?: TextVariantEnum;
  align?: TextAlignEnum;
  ref?: ForwardedRef<HTMLElement>;
}

const Text: FC<TextProps> = memo(
  forwardRef((props, ref) => {
    const {
      className,
      tag = 'div',
      titleTag = 'p',
      title,
      text,
      size = TextSizeEnum.M,
      variant = TextVariantEnum.PRIMARY,
      align = TextAlignEnum.CENTER,
      ...restProps
    } = props;

    return (
      <Tag
        className={cn('', {}, [className, styles[variant], styles[align], styles[size]])}
        tag={tag}
        ref={ref}
        {...restProps}
      >
        {title && (
          <Tag tag={titleTag} className={cn(styles.title)}>
            {title}
          </Tag>
        )}
        {text && <p className={cn(styles.text)}>{text}</p>}
      </Tag>
    );
  })
);

export default Text;
