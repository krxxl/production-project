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

  SETTINGS = 'settings',

  // last route
  NOT_FOUND_PAGE = 'not_found_page',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteSettings = () => '/settings';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteForbidden = () => '/forbidden';
export const getRouteAdminPanel = () => '/admin_panel';
export const getRouteArticleDetail = (id: string) => `/articles/${id}`;
export const getRouteArticleNew = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteSettings()]: AppRoutes.SETTINGS,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteArticles()]: AppRoutes.ARTICLES,
  [getRouteArticleDetail(':id')]: AppRoutes.ARTICLE_DETAIL,
  [getRouteArticleNew()]: AppRoutes.ARTICLE_NEW,
  [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
  [getRouteAdminPanel()]: AppRoutes.ADMIN_PANEL,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
