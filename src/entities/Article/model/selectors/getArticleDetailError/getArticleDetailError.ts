import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailError = (state: StateSchema) => state?.articleDetail?.error || '';
