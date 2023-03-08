import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Ava from 'shared/assets/testing/avatar.jpg';
import ProfilePage from './ProfilePage';

export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [(StoreDecorator({
  profile: {
    form: {
      first: '1',
      lastname: '1',
      username: '1',
      city: '1',
      age: 12,
      avatar: Ava,
    },
  },
}))];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [(ThemeDecorator(THEMES.DARK)), (StoreDecorator({
  profile: {
    form: {
      first: '1',
      lastname: '1',
      username: '1',
      city: '1',
      age: 12,
      avatar: Ava,
    },
  },
}))];
