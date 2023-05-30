import { ElementType } from 'react';

import { ThemeProvider } from '../lib/ThemeContext';

const withTheme = (Component: ElementType) => () =>
  (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );

export default withTheme;
