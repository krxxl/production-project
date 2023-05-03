import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailPageHeader } from './ArticleDetailPageHeader';

export default {
  title: 'pages/ArticleDetailPage/ArticleDetailPageHeader',
  component: ArticleDetailPageHeader,
  argTypes: {},
} as ComponentMeta<typeof ArticleDetailPageHeader>;

const Template: ComponentStory<typeof ArticleDetailPageHeader> = (args) => (
  <ArticleDetailPageHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
