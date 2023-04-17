import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesOrder = (
  state: StateSchema,
) => state?.articlePage?.order || 'asc';
