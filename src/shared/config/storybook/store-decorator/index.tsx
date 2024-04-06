import type { StoryFn } from '@storybook/react';
import type { DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema, StoreProvider, asyncReducers } from '@/app/providers/store-provider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: StoryFn) =>
  (
    <StoreProvider initialState={state} asyncReducers={asyncReducers}>
      <Story />
    </StoreProvider>
  );
