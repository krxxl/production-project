import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';

export interface ArticleDetailCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
