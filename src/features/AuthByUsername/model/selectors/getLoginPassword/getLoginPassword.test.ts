import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('getLoginPassword', () => {
    const login = {
      password: '123',
    };
    const state: DeepPartial<StateSchema> = { login };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });
  test('getLoginPassword without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
