import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
  className?: string;
  isLoading?: boolean;
  comment: Comment;
}

export const CommentCard = memo(({ className, isLoading, comment }: CommentCardProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton height={30} width={30} border="50%" />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton width="100%" height={32} className={cls.comment} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar && <Avatar size={30} alt="avatar" src={comment.user.avatar} />}
        <Text title={comment.user.username} className={cls.username} />
      </div>
      <Text text={comment.text} className={cls.comment} />
    </div>
  );
});
