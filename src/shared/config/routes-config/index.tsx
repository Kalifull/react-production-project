import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum RoutesEnum {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article-details',
  NOT_FOUND = 'notFound',
}

export const routesPaths: Record<RoutesEnum, string> = {
  [RoutesEnum.MAIN]: '/',
  [RoutesEnum.ABOUT]: '/about',
  [RoutesEnum.PROFILE]: '/profile/',
  [RoutesEnum.ARTICLES]: '/articles',
  [RoutesEnum.ARTICLE_DETAILS]: '/articles/',
  [RoutesEnum.NOT_FOUND]: '*',
};
