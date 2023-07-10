import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/shared/lib';

import styles from './ArticlesPage.module.scss';

const ArticlePage: FC = memo(() => {
  const { t } = useTranslation('article');

  return <div className={cn(styles['article-page'])}>{t('articlesPage')}</div>;
});

export default ArticlePage;
