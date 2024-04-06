import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/page';

const AdminPanelPage: FC = memo(() => {
  const { t } = useTranslation('admin');

  return <Page>{t('adminPage')}</Page>;
});

export default AdminPanelPage;
