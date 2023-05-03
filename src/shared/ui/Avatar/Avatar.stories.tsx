import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import Ava from '../../assets/testing/avatar.jpg';

export default {
  title: 'Share/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: Ava,
  size: 50,
  alt: 'avatar',
};
export const PrimaryAlt = Template.bind({});
PrimaryAlt.args = {
  alt: 'AVATAR',
};

export const PrimaryWithoutSize = Template.bind({});
PrimaryWithoutSize.args = {
  src: Ava,
  alt: 'avatar',
};
