import { StoryFn } from '@storybook/react';

import { PopupProvider } from '../../../context';

export const ContextDecorator = (Story: StoryFn) => (
  <PopupProvider>
    <Story />
  </PopupProvider>
);
