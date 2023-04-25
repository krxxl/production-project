import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentCard } from './CommentCard';

export default {
  title: 'Entities/CommentCard',
  component: CommentCard,
  argTypes: {},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comment: {
    id: '2',
    text: 'test2',
    user: {
      id: '2',
      username: 'sdfasd',
    },
  },
};
Primary.decorators = [(StoreDecorator({}))];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
Loading.decorators = [(StoreDecorator({}))];
