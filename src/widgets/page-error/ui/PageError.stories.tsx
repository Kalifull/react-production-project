import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';

import { ThemeEnum } from '@/shared/api';

import PageError from './PageError';

const meta = {
  title: 'widget/PageError',
  component: PageError,
  argTypes: {},
} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
