import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { CommentCard } from '../../ui/CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments?: Comment[];
}

export const CommentList = memo(
  ({ className, isLoading, comments }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <VStack max gap="16" className={classNames('', {}, [className])}>
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
        </VStack>
      );
    }
    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        {comments?.length
          ? comments.map((comment, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <CommentCard
                key={index}
                isLoading={isLoading}
                comment={comment}
              />
            ))
          : t('Пока нет комментариев')}
      </VStack>
    );
  },
);
