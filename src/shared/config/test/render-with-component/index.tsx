import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18nTest from '../../i18n-test';

interface renderWithComponentOptions {
  route?: string;
}

const renderWithComponent = (Component: ReactNode, options: renderWithComponentOptions = {}) => {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nTest}>{Component}</I18nextProvider>
    </MemoryRouter>
  );
};

export default renderWithComponent;
