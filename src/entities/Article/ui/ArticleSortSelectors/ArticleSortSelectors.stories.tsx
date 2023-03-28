import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSortSelectors } from './ArticleSortSelectors';

export default {
  title: 'entities/ArticleSortSelectors',
  component: ArticleSortSelectors,
  argTypes: {},
} as ComponentMeta<typeof ArticleSortSelectors>;

const Template: ComponentStory<typeof ArticleSortSelectors> = (args) => <ArticleSortSelectors {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [(StoreDecorator({}))];
