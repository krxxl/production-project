import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField } from '@/entities/Article';

export const getArticlesSort = (state: StateSchema) =>
  state?.articlePage?.sort || ArticleSortField.TITLE;
