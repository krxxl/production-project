import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ListBox } from './ListBox';

export default {
  title: 'share/ListBox',
  component: ListBox,
  argTypes: {},
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: '2',
  label: 'Choose',
  onChange: action('onChange'),
  options: [
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
    {
      label: '4',
      value: '4',
      disabled: true,
    },
  ],
};
Primary.decorators = [(StoreDecorator({}))];
