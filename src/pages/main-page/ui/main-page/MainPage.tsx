import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/page';

const MainPage: FC = memo(() => {
  const { t } = useTranslation('main');

  return <Page>{t('mainPage')}</Page>;
});

export default MainPage;
