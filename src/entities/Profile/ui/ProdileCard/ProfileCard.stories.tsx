import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Ava from '@/shared/assets/testing/avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: '1',
    lastname: '1',
    username: '1',
    city: '1',
    age: 12,
    avatar: Ava,
  },
};

export const PrimaryReadOnly = Template.bind({});
PrimaryReadOnly.args = {
  data: {
    first: '1',
    lastname: '1',
    username: '1',
    city: '1',
    age: 12,
    avatar: Ava,
  },
  readonly: true,
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  data: {
    first: '1',
    lastname: '1',
    username: '1',
    city: '1',
    age: 12,
    avatar: Ava,
  },
  isLoading: true,
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
  error: 'err',
};
