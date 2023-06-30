import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './NotFoundPage.module.scss';

const NotFoundPage: FC = memo(() => {
  const { t } = useTranslation('translation');

  return <div className={styles.text}>{t('notFoundPage')}</div>;
});

export default NotFoundPage;
