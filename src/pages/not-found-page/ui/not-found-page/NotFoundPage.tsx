import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/page';

import { cn } from '@/shared/lib';

import styles from './NotFoundPage.module.scss';

const NotFoundPage: FC = memo(() => {
  const { t } = useTranslation('translation');

  return <Page className={cn(styles.text)}>{t('notFoundPage')}</Page>;
});

export default NotFoundPage;
