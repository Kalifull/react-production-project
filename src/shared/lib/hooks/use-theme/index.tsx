import { useContext } from 'react';

import { ThemeEnum } from '../../../api';

import { LOCAL_STORAGE_THEME_KEY } from '../../../constant';

import { ThemeContext } from '../../../context';

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
