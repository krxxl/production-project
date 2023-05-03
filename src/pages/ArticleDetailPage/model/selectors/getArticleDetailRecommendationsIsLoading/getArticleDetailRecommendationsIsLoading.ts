import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailRecommendationsIsLoading = (state: StateSchema) =>
  state?.articleDetailPage?.recommendations?.isLoading || false;
