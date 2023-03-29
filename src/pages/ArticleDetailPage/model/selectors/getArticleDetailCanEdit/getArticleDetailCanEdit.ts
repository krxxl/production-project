import { createSelector } from '@reduxjs/toolkit';
import { getUser } from 'entities/User';
import { getArticleDetailData } from 'entities/Article';

export const getArticleDetailCanEdit = createSelector(
  getUser,
  getArticleDetailData,
  (user, article) => {
    if (!article || !user) {
      return false;
    }

    return article?.user?.id === user.id;
  },
);
