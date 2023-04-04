import { ValidateProfileError } from '../../types/profileSchema';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
  test('validateProfileData ok', () => {
    const profile = {
      first: 'wee',
      lastname: 'jbb',
      username: '123',
      city: 'sds',
      age: 23,
      avatar: 'sss',
    };

    expect(validateProfileData(profile)).toEqual([]);
  });

  test('validateProfileData no data', () => {
    expect(validateProfileData()).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('validateProfileData wrong age first and lastname', () => {
    const profile = {
      first: '',
      lastname: '',
      username: '123',
      city: 'sds',
      age: 23.9,
      avatar: 'sss',
    };
    expect(validateProfileData(profile)).toEqual([
      ValidateProfileError.INCORRECT_PROFILE_DATA,
      ValidateProfileError.INCORRECT_PROFILE_AGE,
    ]);
  });
});
