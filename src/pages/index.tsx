import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/page-loader';

import { routesConfig } from './routes';

export const Routing: FC = () => {
  return (
    <Routes>
      {Object.values(routesConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
