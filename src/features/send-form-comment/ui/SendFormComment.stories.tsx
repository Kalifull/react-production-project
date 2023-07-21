import type { Meta, StoryObj } from '@storybook/react';

import { ThemeEnum } from '@/shared/api';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import SendFormComment from './SendFormComment';

const meta = {
  title: 'features/SendFormComment',
  component: SendFormComment,
  argTypes: {},
  decorators: [StoreDecorator({ formCommentInfo: { text: '', isLoading: false } })],
} satisfies Meta<typeof SendFormComment>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Disabled: Story = {
  args: {},
};

Disabled.decorators = [StoreDecorator({ formCommentInfo: { text: '', isLoading: true } })];
