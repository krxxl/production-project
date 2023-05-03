import { ArticleDetailRecommendationsSchema } from './ArticleDetailRecommendationsSchema';
import { ArticleDetailCommentsSchema } from './ArticleDetailCommentsSchema';

export interface ArticleDetailPageSchema {
  recommendations: ArticleDetailRecommendationsSchema;
  comments: ArticleDetailCommentsSchema;
}
