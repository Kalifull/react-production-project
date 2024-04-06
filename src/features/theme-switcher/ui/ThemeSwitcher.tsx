import { type FC, memo } from 'react';

import { ButtonVariantEnum } from '@/shared/api';

import { Button } from '@/shared/ui';

import { useTheme } from '@/shared/lib/hooks';

import { cn } from '@/shared/lib';

import { ThemeSwitcherIconMapping } from '../model/constants/const-theme-switcher';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { theme, toggledTheme } = useTheme();

  const switcherIcon = ThemeSwitcherIconMapping[theme];

  return (
    <Button
      className={cn('', {}, [className])}
      variant={ButtonVariantEnum.CLEAR}
      onClick={toggledTheme}
    >
      {switcherIcon}
    </Button>
  );
});

export default ThemeSwitcher;
