import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { getArticlesView } from '../../model/selectors/getArticlesView/getArticlesView';
import { getArticlesSort } from '../../model/selectors/getArticlesSort/getArticlesSort';
import { getArticlesOrder } from '../../model/selectors/getArticlesOrder/getArticlesOrder';
import { getArticlesSearch } from '../../model/selectors/getArticlesSearch/getArticlesSearch';
import { getArticlesTabValue } from '../../model/selectors/getArticlesTabValue/getArticlesTabValue';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import { OrderType } from '@/shared/types/types';
import { TabsItem } from '@/shared/ui/deprecated/Tabs';

export function useArticleFilters() {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesView);
  const sort = useSelector(getArticlesSort);
  const order = useSelector(getArticlesOrder);
  const search = useSelector(getArticlesSearch);
  const type = useSelector(getArticlesTabValue);

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 400);

  const onViewClick = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view));
    },
    [dispatch],
  );

  const onChangeOrder = useCallback(
    (newOrder: OrderType) => {
      dispatch(articlePageActions.setOrder(newOrder));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlePageActions.setSort(newSort));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articlePageActions.setSearch(value));
      dispatch(articlePageActions.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData],
  );

  const onChangeType = useCallback(
    (tab: TabsItem) => {
      dispatch(articlePageActions.setType(tab.value as ArticleType));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return {
    view,
    sort,
    order,
    search,
    type,
    onViewClick,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
  };
}
