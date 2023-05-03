import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Flex } from './Flex';

export default {
  title: 'share/Flex',
  component: Flex,
  argTypes: {},
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
};
Row.decorators = [StoreDecorator({})];

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
  direction: 'row',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
};
RowGap8.decorators = [StoreDecorator({})];

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
};
Column.decorators = [StoreDecorator({})];
