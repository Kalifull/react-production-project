import type { Meta, StoryObj } from '@storybook/react';

import { ThemeEnum } from '@/shared/api';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';

import NotFoundPage from './NotFoundPage';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
