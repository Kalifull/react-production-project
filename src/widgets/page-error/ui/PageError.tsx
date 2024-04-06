import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { FallbackProps } from 'react-error-boundary';

import { ButtonVariantEnum } from '@/shared/api';

import { Button, Text, VStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import styles from './PageError.module.scss';

interface PageErrorProps extends FallbackProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className, resetErrorBoundary }) => {
  const { t } = useTranslation('translation');

  return (
    <VStack
      className={cn(styles.error, {}, [className])}
      justify="center"
      align="center"
      gap="8"
      stretch
    >
      <Text title={t('errorPage')} />
      <Button variant={ButtonVariantEnum.OUTLINE} onClick={resetErrorBoundary}>
        {t('refreshPage')}
      </Button>
    </VStack>
  );
};

export default PageError;
