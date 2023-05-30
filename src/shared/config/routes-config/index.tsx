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
