import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments?: Comment[]
}

export const CommentList = memo(({
  className,
  isLoading,
  comments,
}: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <CommentCard key={index} isLoading={isLoading} comment={comment} />
        ))
      ) : (
        t('Пока Нет комментариев')
      )}
    </div>
  );
});
