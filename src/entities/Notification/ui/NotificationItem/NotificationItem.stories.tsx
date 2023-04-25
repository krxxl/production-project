import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  argTypes: {},
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  item: {
    title: '123',
    description: '123',
    id: '1',
    userId: '1',
  },
};
Primary.decorators = [(StoreDecorator({}))];
export const PrimaryWithHref = Template.bind({});
PrimaryWithHref.args = {
  item: {
    title: '123',
    description: '123',
    id: '1',
    href: 'http://ya.ru',
    userId: '1',
  },
};
PrimaryWithHref.decorators = [(StoreDecorator({}))];
