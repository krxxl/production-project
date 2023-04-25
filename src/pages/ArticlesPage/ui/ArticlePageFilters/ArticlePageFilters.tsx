import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  ArticleSortField,
  ArticleSortSelectors,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelector,
  ArticleType,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { OrderType } from '@/shared/types/types';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabsItem } from '@/shared/ui/Tabs';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { getArticlesTabValue } from '../../model/selectors/getArticlesTabValue/getArticlesTabValue';
import { getArticlesView } from '../../model/selectors/getArticlesView/getArticlesView';
import { getArticlesSort } from '../../model/selectors/getArticlesSort/getArticlesSort';
import { getArticlesOrder } from '../../model/selectors/getArticlesOrder/getArticlesOrder';
import { getArticlesSearch } from '../../model/selectors/getArticlesSearch/getArticlesSearch';
import cls from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
  className?: string
}

export const ArticlePageFilters = memo(({ className }: ArticlePageFiltersProps) => {
  const { t } = useTranslation();
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

  const onViewClick = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view));
  }, [dispatch]);

  const onChangeOrder = useCallback((newOrder: OrderType) => {
    dispatch(articlePageActions.setOrder(newOrder));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlePageActions.setSort(newSort));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((value: string) => {
    dispatch(articlePageActions.setSearch(value));
    dispatch(articlePageActions.setPage(1));
    debounceFetchData();
  }, [dispatch, debounceFetchData]);

  const onChangeType = useCallback((tab: TabsItem) => {
    dispatch(articlePageActions.setType(tab.value as ArticleType));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelectors
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onViewClick} />
      </div>
      <Card className={cls.search}>
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t('Поиск')}
        />
      </Card>
      <ArticleTypeTabs type={type} onChangeType={onChangeType} className={cls.tabs} />
    </div>
  );
});
