import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesInited } from '../../selectors/getArticlesInited/getArticlesInited';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  // женерики 1. что получаем, 2. что передаем (в данном случае ничего) 3. дженерик для апи, диспатча и для ошибки
  'articlePage/initArticlesPage',
  async (_, thunkAPI) => {
    const {
      dispatch, getState,
    } = thunkAPI;
    const inited = getArticlesInited(getState());

    if (!inited) {
      dispatch(articlePageActions.initView());
      dispatch(fetchArticles({ page: 1 }));
    }
  },
);
