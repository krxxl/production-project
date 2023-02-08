import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {routeConfig} from "shared/config/router/routeConfig";

export const AppRouter = () => {
  return (
    <div className={'page-wrapper'}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({path, element}) => <Route key={path} path={path} element={element}/>)}
        </Routes>
      </Suspense>
    </div>
  );
};
