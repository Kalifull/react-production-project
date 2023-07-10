import { FC, memo, useCallback } from 'react';

import { ButtonVariantEnum } from '../../api';
import { Button } from '..';
import { cn } from '../../lib';

import CopyIcon from '../../assets/icons/copy.svg';

import styles from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

const Code: FC<CodeProps> = memo(({ className, text }) => {
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cn(styles.code, {}, [className])}>
      <Button className={cn(styles.button)} variant={ButtonVariantEnum.CLEAR} onClick={handleCopy}>
        <CopyIcon className={cn(styles.icon)} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});

export default Code;
