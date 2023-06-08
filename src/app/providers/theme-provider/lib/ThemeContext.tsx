import { createContext, Dispatch, FC, SetStateAction, useEffect, useMemo, useState } from 'react';

import { ThemeEnum } from '@/shared/api';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || ThemeEnum.LIGHT;

interface ThemeContextProps {
  theme?: ThemeEnum;
  setTheme?: Dispatch<SetStateAction<ThemeEnum>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: ThemeEnum;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const currentTheme = initialTheme || (defaultTheme as ThemeEnum);
  const [theme, setTheme] = useState<ThemeEnum>(currentTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const memoizedValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>;
};
