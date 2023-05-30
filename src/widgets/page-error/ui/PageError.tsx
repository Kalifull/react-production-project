import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FallbackProps } from 'react-error-boundary';

import { Button } from '@/shared/ui';

import { cn } from '@/shared/lib';

import styles from './PageError.module.scss';

interface PageErrorProps extends FallbackProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className, resetErrorBoundary }) => {
  const { t } = useTranslation('translation');

  return (
    <div className={cn(styles.error, {}, [className])}>
      <p>{t('errorPage')}</p>
      <Button onClick={resetErrorBoundary}>{t('refreshPage')}</Button>
    </div>
  );
};

export default PageError;
