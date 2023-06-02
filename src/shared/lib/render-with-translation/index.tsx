import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18nTest from '../../config/i18n-test';

const renderWithTransition = (Component: ReactNode) => {
  return render(<I18nextProvider i18n={i18nTest}>{Component}</I18nextProvider>);
};

export default renderWithTransition;
