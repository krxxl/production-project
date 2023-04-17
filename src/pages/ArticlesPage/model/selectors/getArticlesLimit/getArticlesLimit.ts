import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesLimit = (
  state: StateSchema,
) => state?.articlePage?.limit || 9;
