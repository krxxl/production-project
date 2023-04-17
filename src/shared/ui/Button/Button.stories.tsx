import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'text',
  theme: ButtonTheme.CLEAR_INVERTED,
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

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'text',
  theme: ButtonTheme.OUTLINE,
};

OutlineDark.decorators = [(ThemeDecorator(THEMES.DARK))];

export const BACKGROUND = Template.bind({});
BACKGROUND.args = {
  children: 'text',
  theme: ButtonTheme.BACKGROUND,
};

export const BACKGROUND_INVERTED = Template.bind({});
BACKGROUND_INVERTED.args = {
  children: 'text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SQUARE_M = Template.bind({});
SQUARE_M.args = {
  children: '>',
  square: true,
  size: ButtonSize.M,
};

export const SQUARE_L = Template.bind({});
SQUARE_L.args = {
  children: '>',
  square: true,
  size: ButtonSize.L,
};

export const SQUARE_XL = Template.bind({});
SQUARE_XL.args = {
  children: '>',
  square: true,
  size: ButtonSize.XL,
};

export const DISABLED = Template.bind({});
DISABLED.args = {
  children: 'text',
  square: true,
  disabled: true,
};

export const DISABLEDDARK = Template.bind({});
DISABLEDDARK.args = {
  children: 'text',
  square: true,
  disabled: true,
};
DISABLEDDARK.decorators = [(ThemeDecorator(THEMES.DARK))];
