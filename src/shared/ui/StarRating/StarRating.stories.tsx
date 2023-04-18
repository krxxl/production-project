import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StarRating } from './StarRating';

export default {
  title: 'share/StarRating',
  component: StarRating,
  argTypes: {},
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [(StoreDecorator({}))];
