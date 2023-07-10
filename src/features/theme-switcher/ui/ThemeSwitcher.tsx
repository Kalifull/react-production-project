import { FC, memo } from 'react';

import { ThemeEnum, ButtonVariantEnum } from '@/shared/api';

import { Button } from '@/shared/ui';

import { useTheme } from '@/shared/lib/hooks';

import { cn } from '@/shared/lib';

import SwitcherIcon from '@/shared/assets/icons/switcher-Icon.svg';

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
      {theme === ThemeEnum.LIGHT && <SwitcherIcon fill="#ffc700" />}
      {theme === ThemeEnum.DARK && <SwitcherIcon fill="#0115c6" />}
      {theme === ThemeEnum.VIOLET && <SwitcherIcon fill="#59084e" />}
    </Button>
  );
});

export default ThemeSwitcher;
