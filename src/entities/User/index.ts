import { UserRoles } from './model/consts/consts';
import { getUser } from './model/selectors/getUser/getUser';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { getJsonSettings } from './model/selectors/jsonSettings';
import {
  getUserRoles,
  isAdmin,
  isManager,
} from './model/selectors/getUserRoles/getUserRoles';
import { userReducer, userActions } from './model/slice/userSlice';
import { saveJsonSettings } from './model/services/saveJsonSettings';

export type { UserSchema, User } from './model/types/userSchema';
export { initAuthData } from './model/services/initAuthData';

export {
  userReducer,
  userActions,
  getUser,
  getUserInited,
  getUserRoles,
  isManager,
  isAdmin,
  UserRoles,
  getJsonSettings,
  saveJsonSettings,
};
