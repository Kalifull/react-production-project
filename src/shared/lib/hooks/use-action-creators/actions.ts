import { loginActions } from '@/features/user-auth';

import { fetchLoginByUsername, userActions } from '@/entities/user';

const allActions = {
  fetchLoginByUsername,
  ...userActions,
  ...loginActions,
};

export default allActions;
