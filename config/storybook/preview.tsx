import type { Preview } from '@storybook/react';

import { ThemeEnum } from '@/shared/api';

import { I18nDecorator } from '@/shared/config/storybook/i18n-decorator';
import { RouterDecorator } from '@/shared/config/storybook/router-decorator';
import { StyleDecorator } from '@/shared/config/storybook/style-decorator';
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [I18nDecorator, RouterDecorator, StyleDecorator, ThemeDecorator(ThemeEnum.LIGHT)],
};

export default preview;
