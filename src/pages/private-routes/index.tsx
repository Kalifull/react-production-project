import { FC, memo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { selectAuthData } from '@/entities/user';

import { routesPaths } from '@/shared/config';

import { useAppSelector } from '@/shared/lib/hooks';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = memo(({ children }) => {
  const location = useLocation();
  const auth = useAppSelector(selectAuthData);

  return auth ? children : <Navigate to={routesPaths.main} state={{ from: location }} replace />;
});
