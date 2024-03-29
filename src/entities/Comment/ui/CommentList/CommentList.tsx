import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { CommentCard } from '../../ui/CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

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
        {comments?.length ? (
          comments.map((comment, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CommentCard key={index} isLoading={isLoading} comment={comment} />
          ))
        ) : (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<Text text={t('Комментарии отсутствуют')} />}
            off={<TextDeprecated text={t('Комментарии отсутствуют')} />}
          />
        )}
      </VStack>
    );
  },
);
