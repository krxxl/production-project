import React from 'react';
import { RoutePath } from 'shared/config/router/routeConfig';
import About from 'shared/assets/icons/abouts.svg';
import Main from 'shared/assets/icons/main.svg';
import Profile from 'shared/assets/icons/profile.svg';

export interface SidebarItemsType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
}

export const SidebatItemslist: SidebarItemsType[] = [
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
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: Profile,
  },
];
