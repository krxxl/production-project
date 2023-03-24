import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesLimit } from 'pages/ArticlesPage/model/selectors/getArticlesLimit/getArticlesLimit';

interface FetchArticlesProps {
  page?: number;
}
export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
  // женерики 1. что получаем, 2. что передаем (в данном случае ничего) 3. дженерик для апи, диспатча и для ошибки
  'articlePage/fetchArticles',
  async (args, thunkAPI) => {
    const {
      dispatch, rejectWithValue, extra, getState,
    } = thunkAPI;

    const { page = 1 } = args;
    const limit = getArticlesLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _page: page,
          _limit: limit,
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
