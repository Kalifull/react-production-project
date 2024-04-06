import {
  fetchArticlesListData,
  fetchNextArticlesPage,
  initArticlesListData,
  articlesPageActions,
} from '@/pages/articles-page';

import { articleFilterActions } from '@/features/article-filter';
import { articleViewActions } from '@/features/article-view-switcher';
import { scrollRecoveryActions } from '@/features/scroll-recovery';
import { formCommentActions } from '@/features/send-form-comment';
import { loginActions } from '@/features/user-auth';

import { fetchArticleById, articleActions } from '@/entities/article';
import { fetchCommentsByArticleId, sendCommentForArticle } from '@/entities/comment';
import { fetchProfileData, saveProfileData, profileActions } from '@/entities/profile';
import { fetchRecommendations } from '@/entities/recommendation';
import { fetchUserByUsername, userActions } from '@/entities/user';

const actionsCreators = {
  fetchArticlesListData,
  fetchNextArticlesPage,
  initArticlesListData,
  fetchArticleById,
  fetchCommentsByArticleId,
  sendCommentForArticle,
  fetchProfileData,
  saveProfileData,
  fetchRecommendations,
  fetchUserByUsername,
  ...articlesPageActions,
  ...articleFilterActions,
  ...articleViewActions,
  ...scrollRecoveryActions,
  ...formCommentActions,
  ...loginActions,
  ...articleActions,
  ...profileActions,
  ...userActions,
};

export default actionsCreators;
