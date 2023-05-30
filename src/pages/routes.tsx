import { RouteProps } from 'react-router-dom';

import { RoutesEnum, routesPaths } from '@/shared/config';

import { MainPage } from './main-page';
import { AboutPage } from './about-page';
import { NotFoundPage } from './not-found-page';

export const routesConfig: Record<RoutesEnum, RouteProps> = {
  [RoutesEnum.MAIN]: {
    path: routesPaths[RoutesEnum.MAIN],
    element: <MainPage />,
  },

  [RoutesEnum.ABOUT]: {
    path: routesPaths[RoutesEnum.ABOUT],
    element: <AboutPage />,
  },

  [RoutesEnum.NOT_FOUND]: {
    path: routesPaths[RoutesEnum.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
