import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18nStorybook from '../../i18n-storybook';

export const I18nDecorator = (Story: StoryFn) => {
  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <I18nextProvider i18n={i18nStorybook}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
