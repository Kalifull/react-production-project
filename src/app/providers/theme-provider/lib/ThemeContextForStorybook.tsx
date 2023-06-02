import { FC, useMemo, useState } from 'react';

import { ThemeEnum } from '@/shared/api';

import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme: ThemeEnum;
}

export const ThemeProviderForStorybook: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<ThemeEnum>(initialTheme);

  const memoizedValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>;
};
