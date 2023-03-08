import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('getLoginError', () => {
    const state: DeepPartial<StateSchema> = { profile: { error: 'error' } };
    expect(getProfileError(state as StateSchema)).toEqual('error');
  });
  test('getLoginError without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual('');
  });
});
