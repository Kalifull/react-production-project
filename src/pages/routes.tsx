import type { RouteProps } from 'react-router-dom';

import { UserRoleEnum } from '@/entities/user';

import { RoutesEnum, routesPaths } from '@/shared/config';

import { MainPage } from './main-page';
import { AboutPage } from './about-page';
import { AdminPanelPage } from './admin-panel-page';
import { ProfilePage } from './profile-page';
import { NotFoundPage } from './not-found-page';
import { ArticlesPage } from './articles-page';
import { ForbiddenPage } from './forbidden-page';
import { ArticleDetailsPage } from './article-details-page';

export interface AppRoutesProps extends RouteProps {
  authOnly?: boolean;
  roles?: UserRoleEnum[];
}

export const routesConfig: Record<RoutesEnum, AppRoutesProps> = {
  [RoutesEnum.MAIN]: {
    path: routesPaths[RoutesEnum.MAIN],
    element: <MainPage />,
  },

  [RoutesEnum.ABOUT]: {
    path: routesPaths[RoutesEnum.ABOUT],
    element: <AboutPage />,
  },

  [RoutesEnum.ADMIN_PANEL]: {
    path: routesPaths[RoutesEnum.ADMIN_PANEL],
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoleEnum.ADMIN, UserRoleEnum.MANAGER],
  },

  [RoutesEnum.PROFILE]: {
    path: `${routesPaths[RoutesEnum.PROFILE]}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },

  [RoutesEnum.ARTICLES]: {
    path: routesPaths[RoutesEnum.ARTICLES],
    element: <ArticlesPage />,
    authOnly: true,
  },

  [RoutesEnum.FORBIDDEN]: {
    path: routesPaths[RoutesEnum.FORBIDDEN],
    element: <ForbiddenPage />,
  },

  [RoutesEnum.ARTICLE_DETAILS]: {
    path: `${routesPaths[RoutesEnum.ARTICLE_DETAILS]}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },

  [RoutesEnum.NOT_FOUND]: {
    path: routesPaths[RoutesEnum.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
