import { loginActions } from '@/features/user-auth';

import { fetchArticleById, articleActions } from '@/entities/article';
import { fetchCommentsByArticleId } from '@/entities/comment';
import { fetchProfileData, profileActions, saveProfileData } from '@/entities/profile';
import { fetchUserByUsername, userActions } from '@/entities/user';

const allActions = {
  fetchArticleById,
  fetchCommentsByArticleId,
  fetchProfileData,
  fetchUserByUsername,
  saveProfileData,
  ...loginActions,
  ...articleActions,
  ...profileActions,
  ...userActions,
};

export default allActions;
