import { type FC, memo, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { UserRoleEnum, selectAuthData, selectRoles } from '@/entities/user';

import { routesPaths } from '@/shared/config';

import { useAppSelector } from '@/shared/lib/hooks';

interface PrivateRouteProps {
  children: JSX.Element;
  roles?: UserRoleEnum[];
}

export const PrivateRoute: FC<PrivateRouteProps> = memo(({ children, roles }) => {
  const location = useLocation();

  const auth = useAppSelector(selectAuthData);
  const userRoles = useAppSelector(selectRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((role) => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={routesPaths.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={routesPaths.forbidden} state={{ from: location }} replace />;
  }

  return children;
});
