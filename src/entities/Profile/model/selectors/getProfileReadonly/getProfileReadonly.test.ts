import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('getProfileReadonly', () => {
    const state: DeepPartial<StateSchema> = { profile: { readonly: true } };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });
  test('getLoginError without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
