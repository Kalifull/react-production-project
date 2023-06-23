import { ElementType } from 'react';

import { ThemeProvider } from '@/shared/context';

const withTheme = (Component: ElementType) => () =>
  (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );

export default withTheme;
