import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'Share/Modal',
  component: Modal,
  argTypes: {
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  isOpen: true,
  children: 'text',
};
PrimaryDark.decorators = [(ThemeDecorator(THEMES.DARK))];
