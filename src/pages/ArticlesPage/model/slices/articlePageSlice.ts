import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleSortField, ArticleView } from '@/entities/Article';
import { VIEW_ARTICLES_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { OrderType } from '@/shared/types/types';
import { ArticleType } from '@/entities/Article/model/consts/consts';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage || articlesAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.SMALL,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    _inited: false,
    sort: ArticleSortField.TITLE,
    order: 'asc',
    search: '',
    type: ArticleType.ALL,
    limit: 9,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(VIEW_ARTICLES_LOCALSTORAGE_KEY, action.payload);
    },
    setOrder: (state, action: PayloadAction<OrderType>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    setPage: (state, action:PayloadAction<number>) => {
      state.page = action.payload;
    },
    initView: (state) => {
      const view = localStorage.getItem(VIEW_ARTICLES_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticles.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlePageReducer, actions: articlePageActions } = articlePageSlice;
