import { loginActions } from '@/features/user-auth';

import { fetchProfileData, saveProfileData, profileActions } from '@/entities/profile';
import { fetchLoginByUsername, userActions } from '@/entities/user';

const allActions = {
  fetchProfileData,
  saveProfileData,
  fetchLoginByUsername,
  ...loginActions,
  ...profileActions,
  ...userActions,
};

export default allActions;
