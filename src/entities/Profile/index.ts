import type { ProfileSchema, Profile } from './model/types/profileSchema';
import { profileReducer, profileActions } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProdileCard/ProfileCard';

export {
  Profile,
  ProfileSchema,
  profileReducer,
  profileActions,
  fetchProfileData,
  ProfileCard,
};
