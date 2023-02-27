import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'Features/LoginForm',
  component: LoginForm,
  argTypes: {
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [(StoreDecorator({
  login: {
    username: '123',
    password: '123',
  },
}))];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {
};
PrimaryWithError.decorators = [(StoreDecorator({
  login: {
    username: '123',
    password: '123',
    error: 'error',
  },
}))];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [(ThemeDecorator(THEMES.DARK)), (StoreDecorator({
  login: {
    username: '123',
    password: '123',
  },
}))];

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
};
PrimaryLoading.decorators = [(StoreDecorator({
  login: {
    isLoading: true,
  },
}))];
