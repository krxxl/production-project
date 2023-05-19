import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { CommentCard } from './CommentCard';

export default {
  title: 'Entities/CommentCard',
  component: CommentCard,
  argTypes: {},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

const PrimaryArgs = {
  comment: {
    id: '2',
    text: 'test2',
    user: {
      id: '2',
      username: 'sdfasd',
    },
  },
};
export const Primary = Template.bind({});
Primary.args = PrimaryArgs;
Primary.decorators = [StoreDecorator({})];

export const NewDesignPrimary = Template.bind({});
NewDesignPrimary.args = PrimaryArgs;
NewDesignPrimary.decorators = [NewDesignDecorator, StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
Loading.decorators = [StoreDecorator({})];
