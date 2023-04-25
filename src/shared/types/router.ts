import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line krxxl-plugin/layer-imports
import { UserRoles } from '@/entities/User';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean,
  roles?: UserRoles[],
}
