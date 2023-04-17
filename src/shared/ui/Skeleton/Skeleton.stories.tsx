import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { THEMES } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
  title: 'share/Skeleton',
  component: Skeleton,
  argTypes: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: '100%',
  height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
  border: '50%',
  width: 100,
  height: 100,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  width: '100%',
  height: 200,
};
PrimaryDark.decorators = [(ThemeDecorator(THEMES.DARK))];

export const CircleDark = Template.bind({});
CircleDark.args = {
  border: '50%',
  width: 100,
  height: 100,
};
CircleDark.decorators = [(ThemeDecorator(THEMES.DARK))];
