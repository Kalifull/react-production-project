import { loginActions } from '@/features/user-auth';

import { fetchProfileData, profileActions } from '@/entities/profile';
import { fetchLoginByUsername, userActions } from '@/entities/user';

const allActions = {
  fetchProfileData,
  fetchLoginByUsername,
  ...loginActions,
  ...profileActions,
  ...userActions,
};

export default allActions;
