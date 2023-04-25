import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Tabs } from './Tabs';

export default {
  title: 'share/Tabs',
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    {
      value: '1',
      content: <div>1</div>,
    },
    {
      value: '2',
      content: '2',
    },
    {
      value: '3',
      content: '3',
    },
  ],
  value: '3',
  onTabClick: action('onTabClick'),
};
Primary.decorators = [(StoreDecorator({}))];
