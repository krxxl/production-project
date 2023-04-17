import { TestAsyncThunk } from '@/shared/lib/testing/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleDetailData } from './fetchArticleDetailData';

describe('fetchArticleDetailData', () => {
  test('success fetchArticleDetailData', async () => {
    const data = {
      id: '1',
      title: 'qwer',
    };

    const thunk = new TestAsyncThunk(fetchArticleDetailData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error fetchArticleDetailData', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
