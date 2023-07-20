import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui';

const AboutPage: FC = memo(() => {
  const { t } = useTranslation('about');

  return <Page>{t('aboutPage')}</Page>;
});

export default AboutPage;
