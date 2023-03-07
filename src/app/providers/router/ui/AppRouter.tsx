import { Route, Routes } from 'react-router-dom';
import React, { Suspense, useMemo } from 'react';
import { routeConfig } from 'shared/config/router/routeConfig';
import { Loader } from 'widgets/Loader';
import { useSelector } from 'react-redux';
import { getUser } from 'entities/User';

export const AppRouter = () => {
  const isAuth = useSelector(getUser);
  const routes = useMemo(() => Object.values(routeConfig).filter((item) => {
    if (item.authOnly && !isAuth) {
      return false;
    }
    return true;
  }), [isAuth]);
  return (

    <div className="page-wrapper">
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};
