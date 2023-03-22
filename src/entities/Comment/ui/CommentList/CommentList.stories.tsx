import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
  title: 'Entities/CommentList',
  component: CommentList,
  argTypes: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'test',
      user: {
        id: '1',
        username: 'sdfas',
      },
    },
    {
      id: '2',
      text: 'test2',
      user: {
        id: '2',
        username: 'sdfasd',
      },
    },
  ],
};
Primary.decorators = [(StoreDecorator({}))];

export const Loading = Template.bind({});
Loading.args = {
  comments: [
  ],
  isLoading: true,
};
Loading.decorators = [(StoreDecorator({}))];
