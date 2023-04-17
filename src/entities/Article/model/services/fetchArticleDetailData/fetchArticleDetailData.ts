import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleDetailData = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
  // женерики 1. что получаем, 2. что передаем (в данном случае ничего) 3. дженерик для апи, диспатча и для ошибки
  'articleDetail/fetchArticleDetailData',
  async (articleId, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;
    try {
      if (!articleId) {
        throw new Error();
      }
      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  },
);
