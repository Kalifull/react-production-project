export enum RoutesEnum {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'notFound',
}

export const routesPaths: Record<RoutesEnum, string> = {
  [RoutesEnum.MAIN]: '/',
  [RoutesEnum.ABOUT]: '/about',
  [RoutesEnum.PROFILE]: '/profile',
  [RoutesEnum.NOT_FOUND]: '*',
};
