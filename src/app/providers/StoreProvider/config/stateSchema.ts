import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailSchema } from 'entities/Article';
import { ArticleDetailCommentsSchema } from 'pages/ArticleDetailPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,

  // Async reducers
  login?: LoginSchema,
  profile?: ProfileSchema,
  articleDetail?: ArticleDetailSchema,
  articleDetailComments?: ArticleDetailCommentsSchema,
  addCommentForm?: AddCommentFormSchema,
  articlePage?: ArticlesPageSchema,
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
  add: (key: StateSchemaKey, reducer: Reducer) => void,
  remove: (key: StateSchemaKey) => void,
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithReducerManager extends EnhancedStore<StateSchema> {
 reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg
  state: StateSchema
}
