import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailComments } from './ArticleDetailComments';

export default {
  title: 'pages/ArticleDetailPage/ArticleDetailComments',
  component: ArticleDetailComments,
  argTypes: {},
} as ComponentMeta<typeof ArticleDetailComments>;

const Template: ComponentStory<typeof ArticleDetailComments> = (args) => <ArticleDetailComments {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [(StoreDecorator({}))];
