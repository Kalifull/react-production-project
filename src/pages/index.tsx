import { FC, Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/page-loader';

import { AppRoutesProps } from '@/shared/config';

import { PrivateRoute } from './private-routes';
import { routesConfig } from './routes';

export const Routing: FC = memo(() => {
  const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRoutesProps) => {
    const route = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{element}</div>
      </Suspense>
    );

    return (
      <Route
        key={path}
        path={path}
        element={authOnly ? <PrivateRoute>{route}</PrivateRoute> : route}
      />
    );
  }, []);

  return <Routes>{Object.values(routesConfig).map(renderWithWrapper)}</Routes>;
});
