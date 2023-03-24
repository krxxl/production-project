import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesPageNum } from 'pages/ArticlesPage/model/selectors/getArticlesPageNum/getArticlesPageNum';
import { Page } from 'shared/ui/Page/Page';
import { getArticlesHasMore } from 'pages/ArticlesPage/model/selectors/getArticlesHasMore/getArticlesHasMore';
import { getArticlesIsLoading } from '../../model/selectors/getArticlesIsLoading/getArticlesIsLoading';
import { getArticlesError } from '../../model/selectors/getArticlesError/getArticlesError';
import { getArticlesView } from '../../model/selectors/getArticlesView/getArticlesView';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import cls from './ArticlesPage.module.scss';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';
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

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(articlePageActions.initView());
    dispatch(fetchArticles({ page: 1 }));
  }, [dispatch]);

  const onViewClick = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view));
  }, [dispatch]);

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
    <DynamicModuleLoader reducers={defaultReducer}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onViewClick} />
        <ArticleList view={view} articles={articles} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
