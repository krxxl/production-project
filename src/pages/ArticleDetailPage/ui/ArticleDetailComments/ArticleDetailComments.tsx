import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { Loader } from '@/widgets/Loader';
import { fetchArticleDetailComments } from '../../model/services/fetchArticleDetailComments/fetchArticleDetailComments';
import { getArticleDetailCommentsIsLoading } from '../../model/selectors/getArticleDetailCommentsIsLoading/getArticleDetailCommentsIsLoading';
import { getArticleComments } from '../../model/slice/articleDetailCommentsSlice';
import { addArticleDetailComment } from '../../model/services/addArticleDetailComment/addArticleDetailComment';

interface ArticleDetailCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailComments = memo(
  ({ className, id }: ArticleDetailCommentsProps) => {
    const { t } = useTranslation();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
      if (id) {
        dispatch(fetchArticleDetailComments(id));
      }
    });

    const onSendComment = useCallback(
      (value: string) => {
        dispatch(addArticleDetailComment(value));
      },
      [dispatch],
    );

    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <Text size={TextSize.SIZE_L} title={t('Комментарии')} />
        <Suspense fallback={<Loader />}>
          <AddCommentForm onSendComment={onSendComment} />
        </Suspense>
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </VStack>
    );
  },
);
