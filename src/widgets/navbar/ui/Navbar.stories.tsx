import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import { ThemeEnum } from '@/shared/api';

import Navbar from './Navbar';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {},
  decorators: [StoreDecorator({ loginFormInfo: { username: '', password: '' } })],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
