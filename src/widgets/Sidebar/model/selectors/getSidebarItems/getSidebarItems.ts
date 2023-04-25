import { createSelector } from '@reduxjs/toolkit';
import { getUser } from '@/entities/User';
import Main from '@/shared/assets/icons/main.svg';
import About from '@/shared/assets/icons/abouts.svg';
import Profile from '@/shared/assets/icons/profile.svg';
import Articles from '@/shared/assets/icons/articles.svg';
import { SidebarItemsType } from '../../types/sidebar';
import { RoutePath } from '@/shared/const/router';

export const getSidebarItems = createSelector(
  getUser,
  (data) => {
    const SidebatItemslist: SidebarItemsType[] = [
      {
        path: RoutePath.main,
        text: 'Главная',
        Icon: Main,
      },
      {
        path: RoutePath.about,
        text: 'О нас',
        Icon: About,
      },
    ];

    if (data) {
      SidebatItemslist.push(
        {
          path: RoutePath.profile + data.id,
          text: 'Профиль',
          Icon: Profile,
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          text: 'Статьи',
          Icon: Articles,
          authOnly: true,
        },
      );
    }

    return SidebatItemslist;
  },
);
