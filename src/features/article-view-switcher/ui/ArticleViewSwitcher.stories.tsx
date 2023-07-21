import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewEnum } from '@/entities/article';

import { ThemeEnum } from '@/shared/api';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import ArticleViewSwitcher from './ArticleViewSwitcher';

const meta = {
  title: 'features/ArticleViewSwitcher',
  component: ArticleViewSwitcher,
  argTypes: {},
  decorators: [
    StoreDecorator({ articleViewInfo: { view: ArticleViewEnum.TILE, _isInitialized: false } }),
  ],
} satisfies Meta<typeof ArticleViewSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
