import { TestAsyncThunk } from 'shared/lib/testing/TestAsyncThunk/TestAsyncThunk';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticlesPage', () => {
  test('success fetchNextArticlesPage', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlePage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalled();
  });
  test('fetchAritcleList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlePage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
