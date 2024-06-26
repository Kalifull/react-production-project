import { useContext } from 'react';

import { ThemeEnum } from '../../../api';

import { LOCAL_STORAGE_THEME_KEY } from '../../../constant';

import { ThemeContext } from '../../../context';

interface UseThemeResponse {
  /** The current theme. */
  theme: ThemeEnum;
  /** A function to toggle between themes. */
  toggledTheme: () => void;
}

/**
 * Custom hook for managing theme state and toggling between themes.
 *
 * @return {UseThemeResponse} An object containing the current theme and a function to toggle between themes.
 */

const useTheme = (): UseThemeResponse => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggledTheme = () => {
    let currentTheme: ThemeEnum;
    switch (theme) {
      case ThemeEnum.DARK:
        currentTheme = ThemeEnum.LIGHT;
        break;
      case ThemeEnum.LIGHT:
        currentTheme = ThemeEnum.VIOLET;
        break;
      case ThemeEnum.VIOLET:
        currentTheme = ThemeEnum.DARK;
        break;
      default:
        currentTheme = ThemeEnum.LIGHT;
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
    setTheme?.(currentTheme);
  };

  return { theme: theme || ThemeEnum.LIGHT, toggledTheme };
};

export default useTheme;
