import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nTesting';
import { MemoryRouter } from 'react-router-dom';

interface renderWithRouterOptions {
  route?: string
}
export function renderWithRouter(component: ReactNode, options: renderWithRouterOptions = {}) {
  const { route = '/' } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  );
}
