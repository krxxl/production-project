import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailCommentsIsLoading = (state: StateSchema) =>
  state?.articleDetailPage?.comments?.isLoading || false;
