import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: Theme;
  toggledTheme: () => void;
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggledTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return { theme, toggledTheme };
};

export default useTheme;
