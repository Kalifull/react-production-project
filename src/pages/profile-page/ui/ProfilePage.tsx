import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { profileReducer } from '@/entities/profile';

import { withAsyncReducers } from '@/shared/lib/hoc';

const ProfilePage: FC = memo(() => {
  const { t } = useTranslation('profile');

  return <div>{t('profilePage')}</div>;
});

export default withAsyncReducers(ProfilePage, { reducers: { profileInfo: profileReducer } });
