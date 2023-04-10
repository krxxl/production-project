import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
  INCORRECT_PROFILE_DATA = 'INCORRECT_PROFILE_DATA',
  INCORRECT_PROFILE_AGE = 'INCORRECT_PROFILE_AGE',
  INCORRECT_PROFILE_CITY = 'INCORRECT_PROFILE_CITY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
  profileData?: Profile,
  form?: Profile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
  validateError?: ValidateProfileError[],
}
