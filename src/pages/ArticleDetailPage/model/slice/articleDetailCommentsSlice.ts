import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleDetailCommentsSchema } from '../type/ArticleDetailCommentsSchema';
import { fetchArticleDetailComments } from '../../model/services/fetchArticleDetailComments/fetchArticleDetailComments';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) =>
    state.articleDetailPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailCommentsSlice = createSlice({
  name: 'articleDetailCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetailComments.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleDetailComments.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        },
      )
      .addCase(fetchArticleDetailComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailCommentsReducer } =
  articleDetailCommentsSlice;
