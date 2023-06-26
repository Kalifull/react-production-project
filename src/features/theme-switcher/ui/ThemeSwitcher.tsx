import { FC, memo } from 'react';

import { ThemeEnum, ButtonVariantEnum } from '@/shared/api';

import { Button } from '@/shared/ui';

import { useTheme } from '@/shared/lib/hooks';

import { cn } from '@/shared/lib';

import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
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
});

export default ThemeSwitcher;
