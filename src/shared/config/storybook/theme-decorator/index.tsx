import { StoryFn } from '@storybook/react';

import { ThemeEnum } from '../../../api';

import { ThemeProvider } from '../../../context';

import { cn } from '../../../lib';

export const ThemeDecorator = (theme: ThemeEnum) => (Story: StoryFn) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={cn('app', {}, [theme])}>
        <Story />
      </div>
    </ThemeProvider>
  );
