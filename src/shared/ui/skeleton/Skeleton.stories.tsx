import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from './Skeleton';

import { ThemeEnum } from '../../api';

import { ThemeDecorator } from '../../config/storybook/theme-decorator';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {},
  args: {
    width: '100%',
    height: 200,
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Violet: Story = {
  args: {},
};

Violet.decorators = [ThemeDecorator(ThemeEnum.VIOLET)];

export const CircleLight: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};

CircleLight.decorators = [ThemeDecorator(ThemeEnum.LIGHT)];

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};

CircleDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const CircleViolet: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};

CircleViolet.decorators = [ThemeDecorator(ThemeEnum.VIOLET)];
