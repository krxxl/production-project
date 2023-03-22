import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment/model/types/comment';

export const fetchArticleDetailComments = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  // женерики 1. что получаем, 2. что передаем (в данном случае ничего) 3. дженерик для апи, диспатча и для ошибки
  'articleDetail/fetchArticleDetailComments',
  async (id, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    if (!id) {
      return rejectWithValue('error');
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          id,
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
