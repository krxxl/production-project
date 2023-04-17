import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailReducer } from '@/entities/Article';
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice';
import { articleDetailPageReducer } from '@/pages/ArticleDetailPage/model/slice';
import { profileReducer } from '@/features/EditableProfileCard';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetail: articleDetailReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailPage: articleDetailPageReducer,
};
export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
