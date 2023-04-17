import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {
  Normal,
} from '@/features/ArticleRecommendationsList/ui/ArticleRecommendationsList/ArticleRecommendationsList.stories';
import AboutPage from './AboutPage';

export default {
  title: 'Pages/AboutPage',
  component: AboutPage,
  argTypes: {
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [(StoreDecorator({}))];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [(ThemeDecorator(THEMES.DARK)), (StoreDecorator({}))];
