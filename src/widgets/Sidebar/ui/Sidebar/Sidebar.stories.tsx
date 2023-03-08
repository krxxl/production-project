import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  argTypes: {
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [(StoreDecorator({
  user: {
    authData: {
      username: 'dfg',
      id: 'sdfg',
    },
  },
}))];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [(ThemeDecorator(THEMES.DARK)), (StoreDecorator({
  user: {
    authData: {
      username: 'dfg',
      id: 'sdfg',
    },
  },
}))];

export const PrimaryWithoutAuth = Template.bind({});
PrimaryWithoutAuth.args = {
};
PrimaryWithoutAuth.decorators = [(StoreDecorator({}))];
