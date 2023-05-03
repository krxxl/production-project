import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailSchema } from '../types/articleDetailSchema';
import { fetchArticleDetailData } from '../../model/services/fetchArticleDetailData/fetchArticleDetailData';
import { Article } from '../types/article';

const initialState: ArticleDetailSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailSlice = createSlice({
  name: 'articleDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetailData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchArticleDetailData.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchArticleDetailData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailActions } = articleDetailSlice;

export const { reducer: articleDetailReducer } = articleDetailSlice;
