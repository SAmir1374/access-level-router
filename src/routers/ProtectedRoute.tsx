import { RouteType } from '../types/ProviderType';

export function ProtectedRoute<T extends RouteType[]>(
  data: T,
  userRole: string[],
  groupRoles: string[],
  authToken: boolean
) {
  return data
    .filter((item) => item.isPublic === true || authToken)
    .filter((item) => item.groupRoles.some((el) => groupRoles.includes(el)))
    .filter((item) => item.roles.some((el) => userRole.includes(el)));
}
