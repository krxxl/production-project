import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode, useMemo } from 'react';
import { getUser, getUserRoles, UserRoles } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

interface RequiredAuthProps {
  children: JSX.Element,
  roles?: UserRoles[]
}
export function RequireAuth({ children, roles }: RequiredAuthProps) {
  const auth = useSelector(getUser);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const isForbidden = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((role) => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!isForbidden) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
}
