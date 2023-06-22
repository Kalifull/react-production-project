import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

import { ButtonSizeEnum, ButtonVariantEnum, ThemeEnum } from '../../api';

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

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariantEnum.OUTLINE,
    size: ButtonSizeEnum.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariantEnum.OUTLINE,
    size: ButtonSizeEnum.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariantEnum.OUTLINE,
  },
};

OutlineDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Background: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariantEnum.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariantEnum.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    variant: ButtonVariantEnum.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    variant: ButtonVariantEnum.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizeEnum.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    variant: ButtonVariantEnum.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizeEnum.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: ButtonVariantEnum.OUTLINE,
    disabled: true,
  },
};
