import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { OrderType } from '@/shared/types/types';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { getArticlesInited } from '../../selectors/getArticlesInited/getArticlesInited';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  // женерики 1. что получаем, 2. что передаем (в данном случае ничего) 3. дженерик для апи, диспатча и для ошибки
  'articlePage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const {
      dispatch, getState,
    } = thunkAPI;
    const inited = getArticlesInited(getState());

    if (!inited) {
      const order = searchParams.get('order') as OrderType;
      const sort = searchParams.get('sort') as ArticleSortField;
      const search = searchParams.get('search');
      const type = searchParams.get('type') as ArticleType;

      if (order) {
        dispatch(articlePageActions.setOrder(order));
      }
      if (sort) {
        dispatch(articlePageActions.setSort(sort));
      }
      if (search) {
        dispatch(articlePageActions.setSearch(search));
      }
      if (type) {
        dispatch(articlePageActions.setType(type));
      }

      dispatch(articlePageActions.initView());
      dispatch(fetchArticles({ replace: false }));
    }
  },
);
