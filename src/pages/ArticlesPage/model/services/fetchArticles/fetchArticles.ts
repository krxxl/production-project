import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesLimit } from 'pages/ArticlesPage/model/selectors/getArticlesLimit/getArticlesLimit';
import { getArticlesSort } from 'pages/ArticlesPage/model/selectors/getArticlesSort/getArticlesSort';
import { getArticlesOrder } from 'pages/ArticlesPage/model/selectors/getArticlesOrder/getArticlesOrder';
import { getArticlesSearch } from 'pages/ArticlesPage/model/selectors/getArticlesSearch/getArticlesSearch';
import { getArticlesPageNum } from 'pages/ArticlesPage/model/selectors/getArticlesPageNum/getArticlesPageNum';
import { addQueryParams } from 'shared/url/addQueryParams/addQueryParams';
import { getArticlesTabValue } from 'pages/ArticlesPage/model/selectors/getArticlesTabValue/getArticlesTabValue';
import { ArticleType } from 'entities/Article/model/types/article';

interface FetchArticlesProps {
  replace?: boolean;
}
export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
  // женерики 1. что получаем, 2. что передаем (в данном случае ничего) 3. дженерик для апи, диспатча и для ошибки
  'articlePage/fetchArticles',
  async (args, thunkAPI) => {
    const {
      dispatch, rejectWithValue, extra, getState,
    } = thunkAPI;

    const limit = getArticlesLimit(getState());
    const sort = getArticlesSort(getState());
    const order = getArticlesOrder(getState());
    const search = getArticlesSearch(getState());
    const page = getArticlesPageNum(getState());
    const type = getArticlesTabValue(getState());

    try {
      addQueryParams({
        sort, order, search, type,
      });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _sort: sort,
          _order: order,
          type: type === ArticleType.ALL ? undefined : type,
          q: search,
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
