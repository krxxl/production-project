import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailRecommendationsError = (
  state: StateSchema,
) => state?.articleDetailPage?.recommendations?.error || '';
