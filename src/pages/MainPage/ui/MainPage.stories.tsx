import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import MainPage from './MainPage';
import { THEMES } from '@/shared/const/theme';

export default {
  title: 'Pages/MainPage',
  component: MainPage,
  argTypes: {
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [(StoreDecorator({}))];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [(ThemeDecorator(THEMES.DARK)), (StoreDecorator({}))];
