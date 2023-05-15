import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from '@/shared/ui/deprecated/Text';
import { getArticlesError } from '../../model/selectors/getArticlesError/getArticlesError';
import { getArticles } from '../../model/slices/articlePageSlice';
import { getArticlesIsLoading } from '../../model/selectors/getArticlesIsLoading/getArticlesIsLoading';
import { getArticlesView } from '../../model/selectors/getArticlesView/getArticlesView';
import { initArticlesPage } from '../../model/services/initArticlePage/initArticlePage';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(
  ({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const view = useSelector(getArticlesView);
    const [searchParams] = useSearchParams();
    const error = useSelector(getArticlesError);

    useInitialEffect(() => {
      dispatch(initArticlesPage(searchParams));
    });

    if (error) {
      return <Text text={t('Ошибка сервера')} />;
    }

    return (
      <ArticleList
        className={className}
        view={view}
        articles={articles}
        isLoading={isLoading}
      />
    );
  },
);
