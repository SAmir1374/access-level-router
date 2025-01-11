// ------------------------------------------------------------ //
//                          library
// ------------------------------------------------------------ //
import RootRouters from '../routers';
import { BrowserRouter } from 'react-router-dom';

// ------------------------------------------------------------ //
//                            type
// ------------------------------------------------------------ //
import ProviderType from '../types/ProviderType';

export default function AccessLvlProvider({
  children,
  routers,
  hasToken,
  userRole = ['developer'],
  groupRoles = ['developer'],
  navigateIfNoTokenURL = "/",
}: ProviderType) {
  return (
    <BrowserRouter>
      <RootRouters
        routes={routers}
        hasToken={hasToken}
        userRole={userRole}
        groupRoles={groupRoles}
        navigateIfNoTokenURL={navigateIfNoTokenURL}
      />
      {children}
    </BrowserRouter>
  );
}
