import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('getProfileForm', () => {
    const form = {
      first: 'wee',
      lastname: 'jbb',
      username: '123',
      city: 'sds',
      age: 23,
      avatar: 'sss',
    };
    const state: DeepPartial<StateSchema> = { profile: { form } };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test('getProfileForm without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
