import { type FC, Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/page-loader';

import { PrivateRoute } from './private-routes';

import type { AppRoutesProps } from './routes';
import { routesConfig } from './routes';

export const Routing: FC = memo(() => {
  const renderWithWrapper = useCallback(
    ({ path, element, authOnly, roles, key }: AppRoutesProps) => {
      const route = <Suspense fallback={<PageLoader />}>{element}</Suspense>;

      return (
        <Route
          index
          key={key}
          path={path}
          element={authOnly ? <PrivateRoute roles={roles}>{route}</PrivateRoute> : route}
        />
      );
    },
    []
  );

  return <Routes>{Object.values(routesConfig).map(renderWithWrapper)}</Routes>;
});
