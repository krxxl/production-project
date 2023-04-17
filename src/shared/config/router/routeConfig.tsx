import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailPage } from '@/pages/ArticleDetailPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ForbiddenPage } from '@/pages/ForrbidenPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRoles } from '@/entities/User';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean,
  roles?: UserRoles[],
}
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',

  ARTICLES = 'articles',
  ARTICLE_DETAIL = 'article_detail',
  ARTICLE_EDIT = 'article_edit',
  ARTICLE_NEW = 'article_new',
  FORBIDDEN = 'forbidden',
  ADMIN_PANEL = 'admin_panel',

  // last route
  NOT_FOUND_PAGE = 'not_found_page',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.ADMIN_PANEL]: '/admin_panel',
  [AppRoutes.ARTICLE_DETAIL]: '/articles/',
  [AppRoutes.ARTICLE_NEW]: '/articles/new',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.NOT_FOUND_PAGE]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAIL]: {
    path: `${RoutePath.article_detail}:id`,
    element: <ArticleDetailPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_NEW]: {
    path: `${RoutePath.article_new}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: `${RoutePath.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoles.MANAGER, UserRoles.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: `${RoutePath.forbidden}`,
    element: <ForbiddenPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND_PAGE]: {
    path: RoutePath.not_found_page,
    element: <NotFoundPage />,
  },
};
