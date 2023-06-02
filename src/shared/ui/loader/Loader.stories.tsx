import type { Meta, StoryObj } from '@storybook/react';

import Loader from './Loader';

import { ThemeEnum } from '../../api';

import { ThemeDecorator } from '../../config/storybook/theme-decorator';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
