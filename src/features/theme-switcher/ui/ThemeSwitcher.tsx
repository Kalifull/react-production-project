import { FC } from 'react';

import { useTheme } from '@/app/providers/theme-provider';

import { ThemeEnum, ButtonVariantEnum } from '@/shared/api';

import { Button } from '@/shared/ui';

import { cn } from '@/shared/lib';

import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggledTheme } = useTheme();

  return (
    <Button
      className={cn('', {}, [className])}
      variant={ButtonVariantEnum.CLEAR}
      onClick={toggledTheme}
    >
      {theme === ThemeEnum.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
