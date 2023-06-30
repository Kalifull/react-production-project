import { RoutesEnum, AppRoutesProps, routesPaths } from '@/shared/config';

import { MainPage } from './main-page';
import { AboutPage } from './about-page';
import { ProfilePage } from './profile-page';
import { NotFoundPage } from './not-found-page';

export const routesConfig: Record<RoutesEnum, AppRoutesProps> = {
  [RoutesEnum.MAIN]: {
    path: routesPaths[RoutesEnum.MAIN],
    element: <MainPage />,
  },

  [RoutesEnum.ABOUT]: {
    path: routesPaths[RoutesEnum.ABOUT],
    element: <AboutPage />,
  },

  [RoutesEnum.PROFILE]: {
    path: routesPaths[RoutesEnum.PROFILE],
    element: <ProfilePage />,
    authOnly: true,
  },

  [RoutesEnum.NOT_FOUND]: {
    path: routesPaths[RoutesEnum.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
