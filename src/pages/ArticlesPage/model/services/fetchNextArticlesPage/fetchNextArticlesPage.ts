import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesHasMore } from '../../selectors/getArticlesHasMore/getArticlesHasMore';
import { getArticlesPageNum } from '../../selectors/getArticlesPageNum/getArticlesPageNum';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { getArticlesIsLoading } from '../../selectors/getArticlesIsLoading/getArticlesIsLoading';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  // женерики 1. что получаем, 2. что передаем (в данном случае ничего) 3. дженерик для апи, диспатча и для ошибки
  'articlePage/fetchNextArticlesPage',
  async (_, thunkAPI) => {
    const {
      dispatch, getState,
    } = thunkAPI;
    const hasMore = getArticlesHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlePageActions.setPage(page + 1));
      dispatch(fetchArticles({ replace: false }));
    }
  },
);
