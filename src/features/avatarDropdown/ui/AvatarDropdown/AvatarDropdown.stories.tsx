import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AvatarDropdown } from './AvatarDropdown';
import { UserRoles } from '@/entities/User';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {},
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <AvatarDropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    user: {
      authData: {
        roles: [UserRoles.USER, UserRoles.ADMIN],
        id: '1',
        avatar: 'af',
        username: '123ksjdf',
      },
    },
  }),
];
