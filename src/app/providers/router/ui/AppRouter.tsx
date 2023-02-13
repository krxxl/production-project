import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { routeConfig } from 'shared/config/router/routeConfig';
import { Loader } from 'widgets/Loader';

export const AppRouter = () => (
  <div className="page-wrapper">
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  </div>
);
