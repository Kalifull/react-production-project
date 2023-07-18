import type { Meta, StoryObj } from '@storybook/react';

import { ThemeEnum } from '@/shared/api';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import { ArticleViewEnum } from '@/entities/article';
import ArticleViewSwitcher from './ArticleViewSwitcher';

const meta = {
  title: 'features/ArticleViewSwitcher',
  component: ArticleViewSwitcher,
  argTypes: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleViewSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    view: ArticleViewEnum.LIST,
  },
};

export const Dark: Story = {
  args: {
    view: ArticleViewEnum.LIST,
  },
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
