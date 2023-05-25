import { createContext, Dispatch, SetStateAction } from 'react';

import { ThemeEnum } from '@/shared/api';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

interface ThemeContextProps {
  theme?: ThemeEnum;
  setTheme?: Dispatch<SetStateAction<ThemeEnum>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});
