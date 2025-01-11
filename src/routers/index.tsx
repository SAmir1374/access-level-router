// ------------------------------------------------------------ //
//                          library
// ------------------------------------------------------------ //
import GenerateRoute from '../routers/GenerateRoute';

// ------------------------------------------------------------ //
//                            type
// ------------------------------------------------------------ //
import RootRouterType from '../types/RootRouterType';

function index({
  routes,
  hasToken,
  navigateIfNoTokenURL,
  userRole,
  groupRoles,
}: RootRouterType) {
  return (
    <GenerateRoute
      routes={routes}
      userRole={userRole}
      groupRoles={groupRoles}
      hasToken={hasToken}
      navigateIfNoTokenURL={navigateIfNoTokenURL}
    />
  );
}

export default index;
