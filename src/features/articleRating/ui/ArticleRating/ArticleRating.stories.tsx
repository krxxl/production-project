import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleRating from './ArticleRating';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {},
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  articleId: '1',
};
Primary.decorators = [(StoreDecorator({
  user: {
    authData: {
      id: '1',
      username: 'wewe',
      avatar: 'sdfsdf',
      roles: [],
    },
  },
}))];
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        { rate: 4 },
      ],
    },
  ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
  articleId: '1',
};
WithoutRate.decorators = [(StoreDecorator({
  user: {
    authData: {
      id: '1',
      username: 'wewe',
      avatar: 'sdfsdf',
      roles: [],
    },
  },
}))];
WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
      ],
    },
  ],
};
