import { FC, memo } from 'react';

import { TextVariantEnum, TextAlignEnum, TextSizeEnum } from '../../api';

import { cn } from '../../lib';

import styles from './Text.module.scss';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  size?: TextSizeEnum;
  variant?: TextVariantEnum;
  align?: TextAlignEnum;
}

const Text: FC<TextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    size = TextSizeEnum.M,
    variant = TextVariantEnum.PRIMARY,
    align = TextAlignEnum.CENTER,
  } = props;

  return (
    <div className={cn('', {}, [className, styles[variant], styles[align], styles[size]])}>
      {title && <p className={cn(styles.title)}>{title}</p>}
      {text && <span className={cn(styles.text)}>{text}</span>}
    </div>
  );
});

export default Text;
