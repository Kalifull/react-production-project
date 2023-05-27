import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return <div>{t('aboutTheSite')}</div>;
};

export default AboutPage;
