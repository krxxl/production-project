import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailReducer } from '@/entities/Article';
// eslint-disable-next-line krxxl-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
// eslint-disable-next-line krxxl-plugin/public-api-imports
import { articleDetailPageReducer } from '@/pages/ArticleDetailPage/testing';
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
