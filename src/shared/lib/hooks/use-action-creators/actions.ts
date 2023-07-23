import {
  fetchArticlesList,
  fetchNextArticlesPage,
  initArticlesListData,
  articlesPageActions,
} from '@/pages/articles-page';

import { articleViewActions } from '@/features/article-view-switcher';
import { scrollRecoveryActions } from '@/features/scroll-recovery';
import { formCommentActions } from '@/features/send-form-comment';
import { loginActions } from '@/features/user-auth';

import { fetchArticleById, articleActions } from '@/entities/article';
import { fetchCommentsByArticleId, sendCommentForArticle } from '@/entities/comment';
import { fetchProfileData, saveProfileData, profileActions } from '@/entities/profile';
import { fetchUserByUsername, userActions } from '@/entities/user';

const allActions = {
  fetchArticlesList,
  fetchNextArticlesPage,
  initArticlesListData,
  fetchArticleById,
  fetchCommentsByArticleId,
  sendCommentForArticle,
  fetchProfileData,
  saveProfileData,
  fetchUserByUsername,
  ...articlesPageActions,
  ...articleViewActions,
  ...scrollRecoveryActions,
  ...formCommentActions,
  ...loginActions,
  ...articleActions,
  ...profileActions,
  ...userActions,
};

export default allActions;
