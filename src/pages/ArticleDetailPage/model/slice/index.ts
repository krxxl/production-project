import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailPageSchema } from '../type';
import {
  articleDetailRecommendationsReducer,
} from '../slice/articleDetailRecommendationsSlice';
import { articleDetailCommentsReducer } from '../slice/articleDetailCommentsSlice';

export const articleDetailPageReducer = combineReducers<ArticleDetailPageSchema>({
  recommendations: articleDetailRecommendationsReducer,
  comments: articleDetailCommentsReducer,
});
