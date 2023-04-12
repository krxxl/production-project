import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetail } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { ArticleDetailPageHeader } from '../../ui/ArticleDetailPageHeader/ArticleDetailPageHeader';
import cls from './ArticleDetailPage.module.scss';
import { articleDetailPageReducer } from '../../model/slice';
import { ArticleDetailComments } from '../ArticleDetailComments/ArticleDetailComments';

interface ArticleDetailPageProps {
  className?: string
}

const defaultReducers: ReducersList = {
  articleDetailPage: articleDetailPageReducer,
};

const ArticleDetailPage = memo(({ className }: ArticleDetailPageProps) => {
  const { id } = useParams<{id: string}>();

  return (
    <DynamicModuleLoader reducers={defaultReducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
        <VStack max gap="16">
          <ArticleDetailPageHeader />
          <ArticleDetail id={id} />
          <ArticleRecommendationsList />
          <ArticleDetailComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailPage;
