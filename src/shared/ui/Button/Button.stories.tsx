import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';

export default {
  title: 'Share/Button',
  component: Button,
  argTypes: {
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'text',
};
PrimaryDark.decorators = [(ThemeDecorator(THEMES.DARK))];
export const Clear = Template.bind({});
Clear.args = {
  children: 'text',
  theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'text',
  theme: ButtonTheme.CLEAR,
};

ClearDark.decorators = [(ThemeDecorator(THEMES.DARK))];

export const Outline = Template.bind({});
Outline.args = {
  children: 'text',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'text',
  theme: ButtonTheme.OUTLINE,
};

OutlineDark.decorators = [(ThemeDecorator(THEMES.DARK))];
