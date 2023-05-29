import { RouteProps } from 'react-router-dom';

import { AboutPage } from '@/pages/about-page';
import { MainPage } from '@/pages/main-page';
import { NotFoundPage } from '@/pages/not-found-page';

export enum RoutesEnum {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
}

export const routesPaths: Record<RoutesEnum, string> = {
  [RoutesEnum.MAIN]: '/',
  [RoutesEnum.ABOUT]: '/about',
  [RoutesEnum.NOT_FOUND]: '*',
};

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
