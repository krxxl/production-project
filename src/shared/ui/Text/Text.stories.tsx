import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'Share/Text',
  component: Text,
  argTypes: {
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'text',
  title: 'title',
};

export const Error = Template.bind({});
Error.args = {
  text: 'text',
  title: 'title',
  theme: TextTheme.ERROR,
};
export const PrimaryWithoutTitle = Template.bind({});
PrimaryWithoutTitle.args = {
  text: 'text',
};

export const PrimaryWithoutText = Template.bind({});
PrimaryWithoutText.args = {
  title: 'title',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  text: 'text',
  title: 'title',
};
PrimaryDark.decorators = [(ThemeDecorator(THEMES.DARK))];

export const SizeL = Template.bind({});
SizeL.args = {
  text: 'text',
  title: 'title',
  size: TextSize.SIZE_L,
};
