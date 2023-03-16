import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailIsLoading = (state: StateSchema) => state?.articleDetail?.isLoading || false;
