import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailError } from './getArticleDetailError';

describe('getArticleDetailError', () => {
  test('getLoginError', () => {
    const state: DeepPartial<StateSchema> = { articleDetail: { error: 'error' } };
    expect(getArticleDetailError(state as StateSchema)).toEqual('error');
  });
  test('getArticleDetailError without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailError(state as StateSchema)).toEqual('');
  });
});
