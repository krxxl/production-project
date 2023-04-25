import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Dropdown } from './Dropdown';

export default {
  title: 'share/Dropdown',
  component: Dropdown,
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  trigger: <div>menu</div>,
  items: [
    {
      label: 'one',
      onClick: action('onClick'),
    },
    {
      label: 'two',
      href: 'ya.ru',
    },
  ],
  direction: 'bottom right',
};
Primary.decorators = [(StoreDecorator({}))];
