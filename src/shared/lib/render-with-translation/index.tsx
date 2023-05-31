import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18nTest from '@/shared/config/i18n-test';

const renderWithTransition = (component: ReactNode) => {
  return render(<I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>);
};

export default renderWithTransition;
