import type { ReactElement } from 'react';

import { ThemeEnum } from '@/shared/api';

import SwitcherIcon from '@/shared/assets/icons/switcher-icon.svg';

export const ThemeSwitcherIconMapping: Record<ThemeEnum, ReactElement> = {
  'app-dark-theme': <SwitcherIcon fill="#0115c6" />,
  'app-light-theme': <SwitcherIcon fill="#ffc700" />,
  'app-violet-theme': <SwitcherIcon fill="#59084e" />,
};
