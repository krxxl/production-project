import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUser } from 'entities/User';
import { getArticleDetailData } from 'entities/Article/model/selectors/getArticleDetailData/getArticleDetailData';
import {
  fetchArticleDetailComments,
} from '../../services/fetchArticleDetailComments/fetchArticleDetailComments';

export const addArticleDetailComment = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetail/addArticleDetailComment',
  async (text, thunkAPI) => {
    const {
      dispatch, rejectWithValue, extra, getState,
    } = thunkAPI;

    const userData = getUser(getState());
    const article = getArticleDetailData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        text,
        userId: userData.id,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchArticleDetailComments(article.id));

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  },
);
