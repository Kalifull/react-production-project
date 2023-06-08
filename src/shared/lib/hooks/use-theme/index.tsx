import { useContext } from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from '@/app/providers/theme-provider/lib/ThemeContext';

import { ThemeEnum } from '@/shared/api';

interface UseThemeResult {
  theme: ThemeEnum;
  toggledTheme: () => void;
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggledTheme = () => {
    const currentTheme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
    setTheme(currentTheme);
  };

  return { theme, toggledTheme };
};

export default useTheme;
