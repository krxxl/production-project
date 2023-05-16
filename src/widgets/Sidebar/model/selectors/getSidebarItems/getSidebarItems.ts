import { createSelector } from '@reduxjs/toolkit';
import { getUser } from '@/entities/User';
import MainDeprecated from '@/shared/assets/icons/main.svg';
import AboutDeprecated from '@/shared/assets/icons/abouts.svg';
import ProfileDeprecated from '@/shared/assets/icons/profile.svg';
import ArticlesDeprecated from '@/shared/assets/icons/articles.svg';

import MainIcon from '@/shared/assets/icons/home.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import { SidebarItemsType } from '../../types/sidebar';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUser, (data) => {
  const SidebatItemslist: SidebarItemsType[] = [
    {
      path: getRouteMain(),
      text: 'Главная',
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => MainDeprecated,
        on: () => MainIcon,
      }),
    },
    {
      path: getRouteAbout(),
      text: 'О нас',
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => AboutDeprecated,
        on: () => AboutIcon,
      }),
    },
  ];

  if (data) {
    SidebatItemslist.push(
      {
        path: getRouteProfile(data.id),
        text: 'Профиль',
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ProfileDeprecated,
          on: () => ProfileIcon,
        }),
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'Статьи',
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ArticlesDeprecated,
          on: () => ArticleIcon,
        }),
        authOnly: true,
      },
    );
  }

  return SidebatItemslist;
});
