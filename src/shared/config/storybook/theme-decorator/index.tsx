import { StoryFn } from '@storybook/react';

import { ThemeProvider } from '@/app/providers/theme-provider/lib/ThemeContext';

import { ThemeEnum } from '@/shared/api';

import { cn } from '@/shared/lib';

export const ThemeDecorator = (theme: ThemeEnum) => (Story: StoryFn) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={cn('app', {}, [theme])}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
