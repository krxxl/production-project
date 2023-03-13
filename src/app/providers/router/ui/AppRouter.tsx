import { Route, Routes } from 'react-router-dom';
import React, { memo, Suspense, useCallback } from 'react';
import { AppRouteProps, routeConfig } from 'shared/config/router/routeConfig';
import { Loader } from 'widgets/Loader';

import { RequireAuth } from 'app/providers/router/ui/RequiredAuth';
//
// export const AppRouter = () => {
//
//   const renderWithWrapper = useCallback((route: AppRouteProps) => (
//     <Route
//       key={route.path}
//       path={route.path}
//       element={route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element}
//     />
//   ), []);
//   return (
//
//     <div className="page-wrapper">
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           {Object.values(routeConfig).map(renderWithWrapper)}
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<Loader />}>
        <div className="page-wrapper">
          {route.element}
        </div>
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
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
