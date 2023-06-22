import { FC, memo } from 'react';

import { TextVariantEnum } from '@/shared/api';

import { cn } from '@/shared/lib';

import styles from './Text.module.scss';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariantEnum;
}

const Text: FC<TextProps> = memo((props) => {
  const { className, title, text, variant = TextVariantEnum.PRIMARY } = props;

  return (
    <div className={cn('', {}, [className, styles[variant]])}>
      {title && <p className={cn(styles.title)}>{title}</p>}
      {text && <span className={cn(styles.text)}>{text}</span>}
    </div>
  );
});

export default Text;
