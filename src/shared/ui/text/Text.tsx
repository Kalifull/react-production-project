import { FC, memo } from 'react';

import { TextVariantEnum, TextAlignEnum } from '../../api';

import { cn } from '../../lib';

import styles from './Text.module.scss';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariantEnum;
  align?: TextAlignEnum;
}

const Text: FC<TextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    variant = TextVariantEnum.PRIMARY,
    align = TextAlignEnum.CENTER,
  } = props;

  return (
    <div className={cn('', {}, [className, styles[variant], styles[align]])}>
      {title && <p className={cn(styles.title)}>{title}</p>}
      {text && <span className={cn(styles.text)}>{text}</span>}
    </div>
  );
});

export default Text;
