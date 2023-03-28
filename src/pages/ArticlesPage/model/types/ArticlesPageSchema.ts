import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView, ArticleSortField } from 'entities/Article';
import { OrderType } from 'shared/types/types';
import { ArticleType } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;
  sort: ArticleSortField;
  order: OrderType;
  search: string;
  type: ArticleType;
  _inited: boolean
}
