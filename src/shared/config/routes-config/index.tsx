export enum RoutesEnum {
  MAIN = 'main',
  ABOUT = 'about',
  ADMIN_PANEL = 'admin-panel',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  FORBIDDEN = 'forbidden',
  ARTICLE_DETAILS = 'article-details',
  NOT_FOUND = 'not-found',
}

export const routesPaths: Record<RoutesEnum, string> = {
  [RoutesEnum.MAIN]: '/',
  [RoutesEnum.ABOUT]: '/about',
  [RoutesEnum.ADMIN_PANEL]: '/admin',
  [RoutesEnum.PROFILE]: '/profile/',
  [RoutesEnum.ARTICLES]: '/articles',
  [RoutesEnum.FORBIDDEN]: '/forbidden',
  [RoutesEnum.ARTICLE_DETAILS]: '/articles/',
  [RoutesEnum.NOT_FOUND]: '*',
};
