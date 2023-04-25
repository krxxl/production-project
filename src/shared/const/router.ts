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
