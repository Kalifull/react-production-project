import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonVariantEnum, TextAlignEnum } from '../../api';
import { Button, Text } from '..';
import { cn } from '../../lib';
import { useClipboard } from '../../lib/hooks';

import CheckMarkIcon from '../../assets/icons/check-mark.svg';
import CopyIcon from '../../assets/icons/copy.svg';

import styles from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

const Code: FC<CodeProps> = memo(({ className, text }) => {
  const { t } = useTranslation('article');
  const { isCopied, copyToClipboard } = useClipboard({ ms: 3000 });

  const handleCopyText = useCallback(() => {
    copyToClipboard(text);
  }, [copyToClipboard, text]);

  return (
    <pre className={cn(styles.code, {}, [className])}>
      <Button
        className={cn(styles.button)}
        variant={ButtonVariantEnum.CLEAR}
        onClick={handleCopyText}
      >
        <div className={cn(styles.icon)}>{isCopied ? <CheckMarkIcon /> : <CopyIcon />}</div>
        <Text
          className={cn(styles.tooltip)}
          text={t(isCopied ? 'copied' : 'copy')}
          align={TextAlignEnum.CENTER}
        />
      </Button>
      <code>{text}</code>
    </pre>
  );
});

export default Code;
