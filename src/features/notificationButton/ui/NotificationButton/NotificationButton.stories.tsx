import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { notificationButton } from './notificationButton';

export default {
  title: 'Widgets/notificationButton',
  component: notificationButton,
  argTypes: {},
} as ComponentMeta<typeof notificationButton>;

const Template: ComponentStory<typeof notificationButton> = (args) => <notificationButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [(StoreDecorator({}))];
