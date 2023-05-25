import { useContext } from 'react';

import { ThemeEnum } from '@/shared/api';

import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: ThemeEnum;
  toggledTheme: () => void;
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggledTheme = () => {
    const newTheme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return { theme, toggledTheme };
};

export default useTheme;
