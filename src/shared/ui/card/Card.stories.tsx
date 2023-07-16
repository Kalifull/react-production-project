import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

import Text from '../text/Text';

import { ThemeEnum } from '../../api';

import { ThemeDecorator } from '../../config/storybook/theme-decorator';

const meta = {
  title: 'shared/Card',
  component: Card,
  argTypes: {},
  args: { children: <Text title="title" text="text" /> },
} satisfies Meta<typeof Card>;

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
