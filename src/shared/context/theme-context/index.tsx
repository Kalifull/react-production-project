import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ThemeEnum } from '../../api';

import { LOCAL_STORAGE_THEME_KEY } from '../../constant';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || ThemeEnum.LIGHT;

interface ThemeContextProps {
  theme?: ThemeEnum;
  setTheme?: Dispatch<SetStateAction<ThemeEnum>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeEnum;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
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

export default ThemeProvider;
