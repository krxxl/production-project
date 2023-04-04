import { getUser } from './model/selectors/getUser/getUser';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import type { UserSchema, User } from './model/types/userSchema';
import { userReducer, userActions } from './model/slice/userSlice';

export {
  User,
  UserSchema,
  userReducer,
  userActions,
  getUser,
  getUserInited,
};
