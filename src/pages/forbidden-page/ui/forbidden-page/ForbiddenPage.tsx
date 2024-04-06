import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/page';

const ForbiddenPage: FC = memo(() => {
  const { t } = useTranslation('translation');

  return <Page>{t('hotAccess')}</Page>;
});

export default ForbiddenPage;
