import type { Meta, StoryObj } from '@storybook/react';

import { ThemeEnum } from '@/shared/api';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import AboutPage from './AboutPage';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof AboutPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
