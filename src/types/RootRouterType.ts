import { RouterType } from './ProviderType';

export default interface RootRouterType {
  routes: RouterType[];
  hasToken: boolean;
  navigateIfNoTokenURL: string;
  userRole: string[];
  groupRoles: string[];
}
