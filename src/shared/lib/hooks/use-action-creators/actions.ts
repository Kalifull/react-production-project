import {
  fetchArticlesList,
  fetchNextArticlesPage,
  articlesPageActions,
} from '@/pages/articles-page';

import { loginActions } from '@/features/user-auth';
import { formCommentActions } from '@/features/send-form-comment';

import { fetchArticleById, articleActions } from '@/entities/article';
import { fetchCommentsByArticleId, sendCommentForArticle } from '@/entities/comment';
import { fetchProfileData, profileActions, saveProfileData } from '@/entities/profile';
import { fetchUserByUsername, userActions } from '@/entities/user';

const allActions = {
  fetchArticlesList,
  fetchNextArticlesPage,
  fetchArticleById,
  fetchCommentsByArticleId,
  sendCommentForArticle,
  fetchProfileData,
  fetchUserByUsername,
  saveProfileData,
  ...articlesPageActions,
  ...loginActions,
  ...formCommentActions,
  ...articleActions,
  ...profileActions,
  ...userActions,
};

export default allActions;
