import type { Preview } from '@storybook/react';

import { ThemeEnum } from '@/shared/api';

import { StyleDecorator } from '@/shared/config/storybook/style-decorator';
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { RouterDecorator } from '@/shared/config/storybook/router-decorator';
import { I18nDecorator } from '@/shared/config/storybook/I18n-decorator';

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
  decorators: [StyleDecorator, ThemeDecorator(ThemeEnum.LIGHT), RouterDecorator, I18nDecorator],
};

export default preview;
