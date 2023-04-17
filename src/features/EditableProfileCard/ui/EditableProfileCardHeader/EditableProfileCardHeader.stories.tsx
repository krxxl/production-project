import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
  title: 'features/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  argTypes: {},
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [(StoreDecorator({}))];
