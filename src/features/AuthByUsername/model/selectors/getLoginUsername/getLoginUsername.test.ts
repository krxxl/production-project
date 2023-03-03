import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('getLoginUsername', () => {
    const login = {
      username: '123',
    };
    const state: DeepPartial<StateSchema> = { login };
    expect(getLoginUsername(state as StateSchema)).toEqual('123');
  });
  test('getLoginUsername without state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
