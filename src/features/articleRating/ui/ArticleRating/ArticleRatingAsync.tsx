import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Spinner } from '@/shared/ui/Spinner/Spinner';

export const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense fallback={<Spinner />}>
    <ArticleRatingLazy {...props} />
  </Suspense>
);
