import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/EditableProfileCardSchema';

const data = {
  first: 'wee',
  lastname: 'jbb',
  username: '123',
  city: 'sds',
  age: 23,
  avatar: 'sss',
};
describe('profileSlice', () => {
  test('profileSlice setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true,
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(false),
    ))
      .toEqual({ readonly: false });
  });
  test('profileSlice cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
      form: {
        age: 33,
      },
      profileData: {
        age: 44,
      },
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    ))
      .toEqual({
        readonly: true,
        validateError: undefined,
        form: {
          age: 44,
        },
        profileData: {
          age: 44,
        },
      });
  });
  test('profileSlice updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        age: 33,
        first: '1',
      },
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ age: 55 }),
    ))
      .toEqual({
        form: {
          age: 55,
          first: '1',
        },
      });
  });

  test('profileSlice service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [],
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    ))
      .toEqual({
        isLoading: true,
        validateError: undefined,
      });
  });

  test('profileSlice service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
      form: undefined,
      profileData: undefined,
      validateError: [],
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    ))
      .toEqual({
        isLoading: false,
        profileData: data,
        form: data,
        readonly: true,
        validateError: undefined,
      });
  });
});
