import { loginActions } from '@/features/user-auth';
import { formCommentActions } from '@/features/send-form-comment';

import { fetchArticleById, articleActions } from '@/entities/article';
import { fetchCommentsByArticleId, sendCommentForArticle } from '@/entities/comment';
import { fetchProfileData, profileActions, saveProfileData } from '@/entities/profile';
import { fetchUserByUsername, userActions } from '@/entities/user';

const allActions = {
  fetchArticleById,
  fetchCommentsByArticleId,
  sendCommentForArticle,
  fetchProfileData,
  fetchUserByUsername,
  saveProfileData,
  ...loginActions,
  ...formCommentActions,
  ...articleActions,
  ...profileActions,
  ...userActions,
};

export default allActions;
