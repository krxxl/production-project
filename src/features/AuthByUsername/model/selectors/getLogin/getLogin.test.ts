import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLogin } from './getLogin';

describe('getLogin', () => {
  test('getLogin', () => {
    const login = {
      username: '123',
      password: '123',
      isLoading: true,
      error: '',
    };
    const state: DeepPartial<StateSchema> = { login };
    expect(getLogin(state as StateSchema)).toEqual(login);
  });
});
