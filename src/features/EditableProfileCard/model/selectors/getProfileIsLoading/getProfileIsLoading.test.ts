import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('getLoginError', () => {
    const state: DeepPartial<StateSchema> = { profile: { isLoading: true } };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });
  test('getLoginError without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });
});
