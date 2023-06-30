import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import { ThemeEnum } from '@/shared/api';

import Sidebar from './Sidebar';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {},
  decorators: [StoreDecorator({})],
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
