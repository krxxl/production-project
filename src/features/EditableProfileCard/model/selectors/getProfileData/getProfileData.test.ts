import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('getProfileData', () => {
    const profileData = {
      first: 'wee',
      lastname: 'jbb',
      username: '123',
      city: 'sds',
      age: 23,
      avatar: 'sss',
    };
    const state: DeepPartial<StateSchema> = { profile: { profileData } };
    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  });
  test('getProfileData without state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
