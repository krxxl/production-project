import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleSortSelectors } from './ArticleSortSelectors';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/ArticleSortSelectors',
  component: ArticleSortSelectors,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleSortSelectors>;

const Template: ComponentStory<typeof ArticleSortSelectors> = (args) => <ArticleSortSelectors {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [(StoreDecorator({}))];
