import { RouterType } from "./ProviderType";

export default interface GenerateRouteType {
  routes: RouterType[];
  hasToken: boolean;
  navigateIfNoTokenURL: string;
  userRole: string[];
  groupRoles: string[];
}
