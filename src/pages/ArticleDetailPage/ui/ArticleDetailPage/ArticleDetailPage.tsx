import { memo, useEffect } from 'react';
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

  useInitialEffect(() => {
    dispatch(fetchArticleDetailComments(id));
  });

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
        {t('Нет такой статьи')}
      </div>
    );
  }
  return (
    <DynamicModuleLoader reducers={defaultReducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
        <ArticleDetail id={id} />
        <Text title={t('Комментарии')} className={cls.title} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailPage;
