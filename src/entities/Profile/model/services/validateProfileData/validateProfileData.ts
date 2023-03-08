import { Profile, ValidateProfileError } from '../../types/profileSchema';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const {
    first, lastname, age, city,
  } = profile;

  const profileErrors: ValidateProfileError[] = [];

  if (!first || !lastname) {
    profileErrors.push(ValidateProfileError.INCORRECT_PROFILE_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    profileErrors.push(ValidateProfileError.INCORRECT_PROFILE_AGE);
  }

  if (!city) {
    profileErrors.push(ValidateProfileError.INCORRECT_PROFILE_CITY);
  }

  return profileErrors;
};
