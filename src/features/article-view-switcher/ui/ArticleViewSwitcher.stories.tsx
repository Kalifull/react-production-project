import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTypeEnum } from '@/entities/article';

import { ThemeEnum } from '@/shared/api';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import { ArticleOrderEnum, ArticleSortEnum } from '../../article-filter';

import ArticleViewSwitcher from './ArticleViewSwitcher';

const meta = {
  title: 'features/ArticleViewSwitcher',
  component: ArticleViewSwitcher,
  argTypes: {},
  decorators: [
    StoreDecorator({
      articleSortingPanelInfo: {
        articleViewInfo: { view: 'tile', _isInitialized: false },
        articleFilterInfo: {
          order: ArticleOrderEnum.ASC,
          sort: ArticleSortEnum.VIEWS,
          search: '',
          type: ArticleTypeEnum.ALL,
        },
      },
    }),
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
