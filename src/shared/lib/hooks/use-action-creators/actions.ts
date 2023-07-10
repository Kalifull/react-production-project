import { loginActions } from '@/features/user-auth';

import { articleActions, fetchArticleById } from '@/entities/article';
import { fetchProfileData, saveProfileData, profileActions } from '@/entities/profile';
import { fetchLoginByUsername, userActions } from '@/entities/user';

const allActions = {
  fetchArticleById,
  fetchProfileData,
  saveProfileData,
  fetchLoginByUsername,
  ...loginActions,
  ...articleActions,
  ...profileActions,
  ...userActions,
};

export default allActions;
