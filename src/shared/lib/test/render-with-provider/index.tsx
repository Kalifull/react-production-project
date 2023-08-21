import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { StoreProvider, StateSchema } from '@/app/providers/store-provider';

import i18nTest from '../../../config/i18n-test';

interface renderWithProviderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

const renderWithProvider = (Component: ReactNode, options: renderWithProviderOptions = {}) => {
  const { route = '/', initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nTest}>{Component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export default renderWithProvider;
