import { articleDetailReducer } from './articleDetailSlice';
import { ArticleDetailSchema } from '../types/articleDetailSchema';
import { fetchArticleDetailData } from '../services/fetchArticleDetailData/fetchArticleDetailData';

const data = {
  id: '1',
  title: 'elkrjgn',
};

describe('articleDetailSlice.test', () => {
  test('articleDetailSlice service pending', () => {
    const state: DeepPartial<ArticleDetailSchema> = {
      isLoading: false,
    };
    expect(
      articleDetailReducer(
        state as ArticleDetailSchema,
        fetchArticleDetailData.pending,
      ),
    ).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test('articleDetailSlice service fulfilled', () => {
    const state: DeepPartial<ArticleDetailSchema> = {
      isLoading: true,
      data: undefined,
    };
    expect(
      articleDetailReducer(
        state as ArticleDetailSchema,
        fetchArticleDetailData.fulfilled(data, '1', ''),
      ),
    ).toEqual({
      isLoading: false,
      data,
    });
  });
});
