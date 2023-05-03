import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailCommentsError = (state: StateSchema) =>
  state?.articleDetailPage?.comments?.error || '';
