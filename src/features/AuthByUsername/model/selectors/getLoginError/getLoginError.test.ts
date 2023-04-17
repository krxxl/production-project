import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('getLoginError', () => {
    const login = {
      error: 'error',
    };
    const state: DeepPartial<StateSchema> = { login };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });
  test('getLoginError without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual('');
  });
});
