import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { StoreProvider, StateSchema } from '@/app/providers/store-provider';

import i18nTest from '../../i18n-test';

interface renderWithComponentOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

const renderWithComponent = (Component: ReactNode, options: renderWithComponentOptions = {}) => {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTest}>{Component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};

export default renderWithComponent;
