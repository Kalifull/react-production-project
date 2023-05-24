import { RouteProps } from 'react-router-dom';

import { AboutPage } from '@/pages/about-page';
import { MainPage } from '@/pages/main-page';

export enum RoutesEnum {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routesPaths: Record<RoutesEnum, string> = {
  [RoutesEnum.MAIN]: '/',
  [RoutesEnum.ABOUT]: '/about',
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
};
