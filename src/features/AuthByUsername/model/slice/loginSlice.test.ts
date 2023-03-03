import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/LoginSchema';

describe('loginSlice.test', () => {
  test('loginSlice.test username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123',
    };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('123333'),
    ))
      .toEqual({ username: '123333' });
  });
  test('loginSlice.test password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123333'),
    ))
      .toEqual({ password: '123333' });
  });
});
