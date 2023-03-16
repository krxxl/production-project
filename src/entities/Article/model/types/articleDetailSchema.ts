import { Article } from './Article';

export interface ArticleDetailSchema {
  data?: Article,
  isLoading: boolean,
  error?: string,
}
