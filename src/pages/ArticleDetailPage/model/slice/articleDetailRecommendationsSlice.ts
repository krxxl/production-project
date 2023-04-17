import {
  createEntityAdapter,
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { ArticleDetailRecommendationsSchema } from '../type/ArticleDetailRecommendationsSchema';
import {
  fetchArticleDetailRecommendations,
} from '../../model/services/fetchArticleDetailRecommendations/fetchArticleDetailRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailRecommendationsSlice = createSlice({
  name: 'articleDetailRecommendations',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetailRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleDetailRecommendations.fulfilled, (
        state,
        action: PayloadAction<Article[]>,
      ) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleDetailRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailRecommendationsReducer } = articleDetailRecommendationsSlice;
