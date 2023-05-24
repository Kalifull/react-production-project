import { createContext, Dispatch, SetStateAction } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});
