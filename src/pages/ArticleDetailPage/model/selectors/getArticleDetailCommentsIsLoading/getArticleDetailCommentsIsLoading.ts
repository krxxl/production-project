import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailCommentsIsLoading = (
  state: StateSchema,
) => state?.articleDetailComments?.isLoading || false;
