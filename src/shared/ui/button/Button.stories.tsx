import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

import { ButtonVariantEnum, ThemeEnum } from '../../api';

import { ThemeDecorator } from '../../config/storybook/theme-decorator';

const meta = {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariantEnum.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariantEnum.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariantEnum.OUTLINE,
  },
};

OutlineDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
