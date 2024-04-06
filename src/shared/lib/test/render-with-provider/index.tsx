import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import type { DeepPartial, Reducer } from '@reduxjs/toolkit';
import { render, type RenderResult } from '@testing-library/react';

import { type StateSchema, StoreProvider } from '@/app/providers/store-provider';

import i18nTest from '../../../config/i18n-test';

interface renderWithProviderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<Reducer<StateSchema>>;
}

/**
 * Renders the given component with the specified provider options.
 *
 * @param {ReactNode} Component The component to render.
 * @param {renderWithProviderOptions} options The options for rendering with provider.
 * @return {RenderResult} The result of rendering the component with provider.
 */

const renderWithProvider = (
  Component: ReactNode,
  options: renderWithProviderOptions = {}
): RenderResult => {
  const { route = '/', initialState, asyncReducers } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18nTest}>{Component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export default renderWithProvider;
