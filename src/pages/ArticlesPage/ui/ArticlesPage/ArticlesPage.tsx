import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesIsLoading } from '../../model/selectors/getArticlesIsLoading/getArticlesIsLoading';
import { getArticlesError } from '../../model/selectors/getArticlesError/getArticlesError';
import { getArticlesView } from '../../model/selectors/getArticlesView/getArticlesView';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import cls from './ArticlesPage.module.scss';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';

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

  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(articlePageActions.initView());
  }, [dispatch]);

  const onViewClick = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={defaultReducer}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onViewClick} />
        <ArticleList view={view} articles={articles} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
