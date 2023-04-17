import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { NavLink } from '@/shared/ui/NavLink/NavLink';
import { RoutePath } from '@/shared/config/router/routeConfig';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
  className?: string;
  isLoading?: boolean;
  comment?: Comment;
}

export const CommentCard = memo(({ className, isLoading, comment }: CommentCardProps) => {
  if (isLoading) {
    return (
      <VStack max gap="16" className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton height={30} width={30} border="50%" />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton width="100%" height={32} className={cls.comment} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack max gap="16" className={classNames(cls.CommentCard, {}, [className])}>
      <NavLink to={RoutePath.profile + comment.user.id} className={cls.header}>
        {comment.user.avatar && <Avatar size={30} alt="avatar" src={comment.user.avatar} />}
        <Text title={comment.user.username} className={cls.username} />
      </NavLink>
      <Text text={comment.text} />
    </VStack>
  );
});
