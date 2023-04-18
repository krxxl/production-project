import { lazy, Suspense } from 'react';
import { Loader } from '@/widgets/Loader';
import { ArticleRatingProps } from './ArticleRating';

export const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense fallback={<Loader />}>
    <ArticleRatingLazy {...props} />
  </Suspense>
);
