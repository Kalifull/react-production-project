import { StoryFn } from '@storybook/react';

import { ThemeProviderForStorybook } from '@/app/providers/theme-provider/lib/ThemeContextForStorybook';

import { ThemeEnum } from '@/shared/api';

import { cn } from '@/shared/lib';

export const ThemeDecorator = (theme: ThemeEnum) => (Story: StoryFn) => {
  return (
    <ThemeProviderForStorybook initialTheme={theme}>
      <div className={cn('app', {}, [theme])}>
        <Story />
      </div>
    </ThemeProviderForStorybook>
  );
};
