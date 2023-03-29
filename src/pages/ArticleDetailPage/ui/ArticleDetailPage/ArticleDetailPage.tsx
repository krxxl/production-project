import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetail, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { ArticleDetailPageHeader } from 'pages/ArticleDetailPage/ui/ArticleDetailPageHeader/ArticleDetailPageHeader';
import {
  getArticleDetailRecommendationsIsLoading,
} from '../../model/selectors/getArticleDetailRecommendationsIsLoading/getArticleDetailRecommendationsIsLoading';
import { getArticleRecommendations } from '../../model/slice/articleDetailRecommendationsSlice';
import { addArticleDetailComment } from '../../model/services/addArticleDetailComment/addArticleDetailComment';
import {
  getArticleDetailCommentsIsLoading,
} from '../../model/selectors/getArticleDetailCommentsIsLoading/getArticleDetailCommentsIsLoading';
import cls from './ArticleDetailPage.module.scss';
import { getArticleComments } from '../../model/slice/articleDetailCommentsSlice';
import { fetchArticleDetailComments } from '../../model/services/fetchArticleDetailComments/fetchArticleDetailComments';
import {
  fetchArticleDetailRecommendations,
} from '../../model/services/fetchArticleDetailRecommendations/fetchArticleDetailRecommendations';
import { articleDetailPageReducer } from '../../model/slice';

interface ArticleDetailPageProps {
  className?: string
}

const defaultReducers: ReducersList = {
  articleDetailPage: articleDetailPageReducer,
};

const ArticleDetailPage = memo(({ className }: ArticleDetailPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleDetailRecommendationsIsLoading);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchArticleDetailComments(id));
    dispatch(fetchArticleDetailRecommendations());
  });

  const onSendComment = useCallback((value: string) => {
    dispatch(addArticleDetailComment(value));
  }, [dispatch]);

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
        {t('Нет такой статьи')}
      </Page>
    );
  }
  return (
    <DynamicModuleLoader reducers={defaultReducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
        <ArticleDetailPageHeader />
        <ArticleDetail id={id} />
        <Text size={TextSize.SIZE_L} title={t('Рекомандации')} className={cls.title} />
        <ArticleList
          className={cls.recommendations}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          target="_blank"
        />
        <Text size={TextSize.SIZE_L} title={t('Комментарии')} className={cls.title} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailPage;
