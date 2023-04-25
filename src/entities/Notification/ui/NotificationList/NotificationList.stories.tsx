import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';

const item = {
  title: '123',
  description: '123',
  id: '1',
  href: 'http://ya.ru',
  userId: '1',
};

export default {
  title: 'entities/NotificationList',
  component: NotificationList,
  decorators: [(withMock)],
  argTypes: {},
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [(StoreDecorator({}))];
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        { ...item, id: '1' },
        { ...item, id: '2' },
        { ...item, id: '3' },
      ],
    },
  ],
};
