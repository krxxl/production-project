import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18n from '@/shared/config/i18n/i18nTesting';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { THEMES } from '@/shared/const/theme';
// eslint-disable-next-line krxxl-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
// eslint-disable-next-line krxxl-plugin/layer-imports
import '@/app/styles/index.scss';

interface renderWithRouterOptions {
  route?: string,
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

interface TestProviderProps {
  children: ReactNode,
  options?: renderWithRouterOptions,
  theme?: THEMES,
}

export function TestProvider(props: TestProviderProps) {
  const { children, options = {}, theme = THEMES.LIGHT } = props;
  const {
    route = '/', initialState, asyncReducers,
  } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider defTheme={theme}>
            <div className={`app ${theme}`}>
              {children}
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}
export function renderWithRouter(component: ReactNode, options: renderWithRouterOptions = {}) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
