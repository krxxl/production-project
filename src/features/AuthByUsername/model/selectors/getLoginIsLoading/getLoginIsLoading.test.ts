import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('getLoginIsLoading', () => {
    const login = {
      isLoading: true,
    };
    const state: DeepPartial<StateSchema> = { login };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });
  test('getLoginIsLoading without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
