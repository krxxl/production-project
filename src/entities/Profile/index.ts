import { getProfile } from './model/selectors/getProfile/getProfile';
import type { ProfileSchema, Profile } from './model/types/profileSchema';
import { profileReducer, profileActions } from './model/slice/profileSlice';

export {
  Profile,
  ProfileSchema,
  profileReducer,
  profileActions,
  getProfile,
};
