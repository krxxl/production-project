export { getArticleDetailData } from './model/selectors/getArticleDetailData/getArticleDetailData';

export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';
export { ArticleSortSelectors } from './ui/ArticleSortSelectors/ArticleSortSelectors';
export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';

export { articleDetailReducer } from './model/slice/articleDetailSlice';

export type { ArticleDetailSchema } from './model/types/articleDetailSchema';

export { ArticleDetail } from './ui/ArticleDetail/ArticleDetail';
export type { Article } from './model/types/article';
export {
  ArticleSortField, ArticleView, ArticleType, ArticleBlockType,
} from './model/consts/consts';
