import { UserRoles } from './model/consts/consts';
import { getUser } from './model/selectors/getUser/getUser';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
  getUserRoles,
  isAdmin,
  isManager,
} from './model/selectors/getUserRoles/getUserRoles';
import { userReducer, userActions } from './model/slice/userSlice';

export type { UserSchema, User } from './model/types/userSchema';

export {
  userReducer,
  userActions,
  getUser,
  getUserInited,
  getUserRoles,
  isManager,
  isAdmin,
  UserRoles,
};
