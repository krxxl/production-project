import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import { initArticlesPage } from '../../model/services/initArticlePage/initArticlePage';
import { ArticlePageFilters } from '../../ui/ArticlePageFilters/ArticlePageFilters';
import { getArticlesIsLoading } from '../../model/selectors/getArticlesIsLoading/getArticlesIsLoading';
import { getArticlesError } from '../../model/selectors/getArticlesError/getArticlesError';
import { getArticlesView } from '../../model/selectors/getArticlesView/getArticlesView';
import cls from './ArticlesPage.module.scss';
import { articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

interface ArticlesPageProps {
  className?: string
}

const defaultReducer: ReducersList = {
  articlePage: articlePageReducer,
};

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const error = useSelector(getArticlesError);
  const view = useSelector(getArticlesView);
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    return (
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        {t('Ошибка сервера')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={defaultReducer} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlePageFilters />
        <ArticleList className={cls.list} view={view} articles={articles} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
