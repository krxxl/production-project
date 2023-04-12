import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article/model/consts/consts';

export const getArticlesTabValue = (
  state: StateSchema,
) => state?.articlePage?.type ?? ArticleType.ALL;
