import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';

export const getArticlesView = (
  state: StateSchema,
) => state?.articlePage?.view || ArticleView.SMALL;
