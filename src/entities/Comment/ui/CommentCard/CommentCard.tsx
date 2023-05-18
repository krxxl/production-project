import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { NavLink } from '@/shared/ui/deprecated/NavLink';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface CommentCardProps {
  className?: string;
  isLoading?: boolean;
  comment?: Comment;
}

export const CommentCard = memo(
  ({ className, isLoading, comment }: CommentCardProps) => {
    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });

    if (isLoading) {
      return (
        <VStack
          data-testid="CommentCard.Loading"
          max
          gap="16"
          className={classNames(cls.CommentCard, {}, [className, cls.loading])}
        >
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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" border="round" max>
            <VStack
              data-testid="CommentCard.Content"
              gap="8"
              max
              className={classNames(cls.CommentCardRedesigned, {}, [className])}
            >
              <AppLink to={getRouteProfile(comment.user.id)}>
                <HStack gap="8">
                  {comment.user.avatar ? (
                    <Avatar size={30} src={comment.user.avatar} />
                  ) : null}
                  <Text text={comment.user.username} bold />
                </HStack>
              </AppLink>
              <Text text={comment.text} />
            </VStack>
          </Card>
        }
        off={
          <VStack
            data-testid="CommentCard.Content"
            max
            gap="16"
            className={classNames(cls.CommentCard, {}, [className])}
          >
            <NavLink
              to={getRouteProfile(comment.user.id)}
              className={cls.header}
            >
              {comment.user.avatar && (
                <AvatarDeprecated
                  size={30}
                  alt="avatar"
                  src={comment.user.avatar}
                />
              )}
              <Text title={comment.user.username} className={cls.username} />
            </NavLink>
            <Text text={comment.text} />
          </VStack>
        }
      />
    );
  },
);
