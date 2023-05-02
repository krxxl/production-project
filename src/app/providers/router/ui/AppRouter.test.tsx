import { screen } from '@testing-library/react';
import { renderWithRouter } from '@/shared/lib/testing/renderWithRouter/renderWithRouter';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { UserRoles } from '@/entities/User';

describe('approuter', () => {
  test('render', async () => {
    renderWithRouter(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Страница не найдена', async () => {
    renderWithRouter(<AppRouter />, {
      route: '/asfasfasfasf',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Редирект неавторизованного пользователя на главную', async () => {
    renderWithRouter(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ к закрытой страницы для авторизованного пользователя', async () => {
    renderWithRouter(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ запрещен (отсутствует роль)', async () => {
    renderWithRouter(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ разрешен (присутствует роль)', async () => {
    renderWithRouter(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { _inited: true, authData: { roles: [UserRoles.ADMIN] } },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
