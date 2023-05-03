import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailIsLoading } from './getArticleDetailIsLoading';

describe('getArticleDetailIsLoading', () => {
  test('getArticleDetailIsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetail: { isLoading: true },
    };
    expect(getArticleDetailIsLoading(state as StateSchema)).toEqual(true);
  });
  test('getArticleDetailIsLoading without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailIsLoading(state as StateSchema)).toEqual(false);
  });
});
