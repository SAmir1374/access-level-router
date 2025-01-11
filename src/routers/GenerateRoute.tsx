// ------------------------------------------------------------ //
//                          library
// ------------------------------------------------------------ //
import { Suspense } from 'react';
import { ProtectedRoute } from './ProtectedRoute';
import { Route, Routes, useNavigate } from 'react-router-dom';

// ------------------------------------------------------------ //
//                            type
// ------------------------------------------------------------ //
import GenerateRouteType from '../types/GenerateRouteType';

function GenerateRoute({
  routes,
  hasToken,
  navigateIfNoTokenURL,
  groupRoles,
  userRole,
}: GenerateRouteType) {
  const navigate = useNavigate();

  if (!hasToken) {
    navigate(navigateIfNoTokenURL);
  }

  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <Routes>
        {routes.map((rou) =>
          ProtectedRoute(rou.routes, userRole, groupRoles, !!hasToken).map(
            (el, index) => <Route key={index} path={el.pageUrl} element={<el.component />} />
          )
        )}
      </Routes>
    </Suspense>
  );
}

export default GenerateRoute;
