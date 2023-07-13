import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import { ThemeEnum } from '@/shared/api';

import Sidebar from './Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {},
  decorators: [
    StoreDecorator({
      userInfo: {
        authData: null,
        isLoading: false,
        error: null,
      },
    }),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Violet: Story = {
  args: {},
};

Violet.decorators = [ThemeDecorator(ThemeEnum.VIOLET)];
