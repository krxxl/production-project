import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NavLink, NavLinkTheme } from './NavLink';

export default {
  title: 'Share/NavLink',
  component: NavLink,
  args: {
    to: '/',
  },
  argTypes: {
  },
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'text',
  theme: NavLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'text',
  theme: NavLinkTheme.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'text',
};
PrimaryDark.decorators = [(ThemeDecorator(THEMES.DARK))];
