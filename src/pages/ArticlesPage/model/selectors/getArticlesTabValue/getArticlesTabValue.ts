import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entities/Article';

export const getArticlesTabValue = (
  state: StateSchema,
) => state?.articlePage?.type ?? ArticleType.ALL;
