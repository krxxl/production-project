import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUser } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
  className?: string,
  articleId: string,
}

const ArticleRating = memo(({
  className,
  articleId,
}: ArticleRatingProps) => {
  const { t } = useTranslation();
  const user = useSelector(getUser);
  const { data, isLoading } = useArticleRating({ articleId, userId: user?.id ?? '' });
  const [rateArticleMutation] = useRateArticle();

  const onRateArticle = useCallback((stars: number, feedback?: string) => {
    try {
      rateArticleMutation({
        articleId,
        userId: user?.id ?? '',
        rate: stars,
        feedback,
      });
    } catch (err) {
      console.log(err);
    }
  }, [articleId, rateArticleMutation, user?.id]);

  const onCancle = useCallback((stars: number) => {
    onRateArticle(stars);
  }, [onRateArticle]);

  const onConfirm = useCallback((stars: number, feedback?: string) => {
    onRateArticle(stars, feedback);
  }, [onRateArticle]);

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      rate={rating?.rate}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте отзыв')}
      hasFeedback
      onCancel={onCancle}
      onConfirm={onConfirm}
      className={className}
    />
  );
});

export default ArticleRating;
