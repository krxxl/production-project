import { Route, Routes } from 'react-router-dom';
import React, { memo, Suspense, useCallback } from 'react';
import { AppRouteProps, routeConfig } from 'shared/config/router/routeConfig';
import { Loader } from 'widgets/Loader';

import { RequireAuth } from 'app/providers/router/ui/RequiredAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<Loader />}>
        {route.element}
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
};

export default memo(AppRouter);
