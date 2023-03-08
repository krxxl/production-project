import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export enum ValidateProfileError {
  INCORRECT_PROFILE_DATA = 'INCORRECT_PROFILE_DATA',
  INCORRECT_PROFILE_AGE = 'INCORRECT_PROFILE_AGE',
  INCORRECT_PROFILE_CITY = 'INCORRECT_PROFILE_CITY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
  first?: string,
  lastname?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  username?:string,
  avatar?: string
}

export interface ProfileSchema {
  profileData?: Profile,
  form?: Profile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
  validateError?: ValidateProfileError[],
}
