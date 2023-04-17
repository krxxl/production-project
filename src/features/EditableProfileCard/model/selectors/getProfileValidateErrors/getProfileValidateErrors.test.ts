import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';

describe('ValidateProfileError', () => {
  test('ValidateProfileError', () => {
    const validateError = [ValidateProfileError.INCORRECT_PROFILE_DATA, ValidateProfileError.INCORRECT_PROFILE_CITY];
    const state: DeepPartial<StateSchema> = { profile: { validateError } };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateError);
  });
  test('ValidateProfileError without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
