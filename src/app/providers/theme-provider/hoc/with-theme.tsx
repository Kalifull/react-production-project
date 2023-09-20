import { ReactNode } from 'react';

import { ThemeProvider } from '@/shared/context';

const withTheme = (component: () => ReactNode) => () =>
  <ThemeProvider>{component()}</ThemeProvider>;

export default withTheme;
