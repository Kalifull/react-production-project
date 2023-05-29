import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  const { t } = useTranslation('translation');

  return <div className={styles.text}>{t('notFoundPage')}</div>;
};

export default NotFoundPage;
