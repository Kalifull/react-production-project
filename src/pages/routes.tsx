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

export type AppRoutesProps = {
  authOnly?: boolean;
  roles?: UserRoleEnum[];
  key: number;
} & RouteProps;

export const routesConfig: Record<RoutesEnum, AppRoutesProps> = {
  [RoutesEnum.MAIN]: {
    path: routesPaths[RoutesEnum.MAIN],
    element: <MainPage />,
    key: 1,
  },
  [RoutesEnum.ABOUT]: {
    path: routesPaths[RoutesEnum.ABOUT],
    element: <AboutPage />,
    key: 2,
  },

  [RoutesEnum.ADMIN_PANEL]: {
    path: routesPaths[RoutesEnum.ADMIN_PANEL],
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoleEnum.ADMIN, UserRoleEnum.MANAGER],
    key: 3,
  },

  [RoutesEnum.PROFILE]: {
    path: `${routesPaths[RoutesEnum.PROFILE]}:id`,
    element: <ProfilePage />,
    authOnly: true,
    key: 4,
  },

  [RoutesEnum.ARTICLES]: {
    path: routesPaths[RoutesEnum.ARTICLES],
    element: <ArticlesPage />,
    authOnly: true,
    key: 5,
  },

  [RoutesEnum.FORBIDDEN]: {
    path: routesPaths[RoutesEnum.FORBIDDEN],
    element: <ForbiddenPage />,
    key: 6,
  },

  [RoutesEnum.ARTICLE_DETAILS]: {
    path: `${routesPaths[RoutesEnum.ARTICLE_DETAILS]}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
    key: 7,
  },

  [RoutesEnum.NOT_FOUND]: {
    path: routesPaths[RoutesEnum.NOT_FOUND],
    element: <NotFoundPage />,
    key: 8,
  },
};
