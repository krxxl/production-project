import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailData = (state: StateSchema) =>
  state.articleDetail?.data;
