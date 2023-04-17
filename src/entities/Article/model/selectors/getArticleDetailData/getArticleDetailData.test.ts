import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailData } from './getArticleDetailData';

describe('getArticleDetailData', () => {
  test('getArticleDetailData', () => {
    const data = {
      id: '1',
      title: 'sadf',
    };
    const state: DeepPartial<StateSchema> = { articleDetail: { data } };
    expect(getArticleDetailData(state as StateSchema)).toEqual(data);
  });
  test('getProfileData without state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getArticleDetailData(state as StateSchema)).toEqual(undefined);
  });
});
