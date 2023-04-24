import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { ArticleDetailSchema } from '@/entities/Article';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { ScrollRestorationSchema } from '@/features/ScrollRestoration';
import { ArticleDetailPageSchema } from '@/pages/ArticleDetailPage';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/EditableProfileCard';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  scrollRestoration: ScrollRestorationSchema,
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
  // Async reducers
  login?: LoginSchema,
  profile?: ProfileSchema,
  articleDetail?: ArticleDetailSchema,
  articleDetailPage?: ArticleDetailPageSchema,
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
