import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetail } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router';
import { Page } from 'shared/ui/Page/Page';
import {
  addArticleDetailComment,
} from '../../model/services/addArticleDetailComment/addArticleDetailComment';
import {
  getArticleDetailCommentsIsLoading,
} from '../../model/selectors/getArticleDetailCommentsIsLoading/getArticleDetailCommentsIsLoading';
import cls from './ArticleDetailPage.module.scss';
import { articleDetailCommentsReducer, getArticleComments } from '../../model/slice/articleDetailCommentsSlice';
import {
  fetchArticleDetailComments,
} from '../../model/services/fetchArticleDetailComments/fetchArticleDetailComments';

interface ArticleDetailPageProps {
  className?: string
}

const defaultReducers: ReducersList = {
  articleDetailComments: articleDetailCommentsReducer,
};

const ArticleDetailPage = memo(({ className }: ArticleDetailPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailCommentsIsLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  useInitialEffect(() => {
    dispatch(fetchArticleDetailComments(id));
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
        <Button onClick={onBackToList} className={cls.goBackBtn} theme={ButtonTheme.OUTLINE}>{t('Назад')}</Button>
        <ArticleDetail id={id} />
        <Text title={t('Комментарии')} className={cls.title} />
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
