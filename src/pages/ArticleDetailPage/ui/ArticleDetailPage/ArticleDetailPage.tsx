import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetail } from '@/entities/Article';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailPageHeader } from '../../ui/ArticleDetailPageHeader/ArticleDetailPageHeader';
import cls from './ArticleDetailPage.module.scss';
import { articleDetailPageReducer } from '../../model/slice';
import { ArticleDetailComments } from '../ArticleDetailComments/ArticleDetailComments';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { Card } from '@/shared/ui/Card';

interface ArticleDetailPageProps {
  className?: string;
}

const defaultReducers: ReducersList = {
  articleDetailPage: articleDetailPageReducer,
};

const ArticleDetailPage = memo(({ className }: ArticleDetailPageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  // const isArticleRatingEnabled = true;
  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={defaultReducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
        <VStack max gap="16">
          <ArticleDetailPageHeader />
          <ArticleDetail id={id} />
          <ToggleFeatures
            feature="isArticleRatingEnabled"
            on={<ArticleRating articleId={id} />}
            off={<Card>{t('Оценка статей скоро появится!')}</Card>}
          />
          <ArticleRecommendationsList />
          <ArticleDetailComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailPage;
