import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
  title: 'Share/Input',
  component: Input,
  argTypes: {
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Login',
  value: '123',
};

export const PrimaryWithotPlaceholder = Template.bind({});
PrimaryWithotPlaceholder.args = {
};

export const PrimaryWithotPlaceholderDark = Template.bind({});
PrimaryWithotPlaceholderDark.args = {
};
PrimaryWithotPlaceholderDark.decorators = [(ThemeDecorator(THEMES.DARK))];
