import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider';
import { PageError } from './PageError';

export default {
  title: 'Widgets/PageError',
  component: PageError,
  argTypes: {
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [(ThemeDecorator(THEMES.DARK))];
