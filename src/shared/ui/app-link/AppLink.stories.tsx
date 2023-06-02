import type { Meta, StoryObj } from '@storybook/react';

import AppLink from './AppLink';

import { AppLinkVariantEnum, ThemeEnum } from '../../api';

import { ThemeDecorator } from '../../config/storybook/theme-decorator';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {},
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
    variant: AppLinkVariantEnum.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    variant: AppLinkVariantEnum.PRIMARY,
  },
};

PrimaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Secondary: Story = {
  args: {
    children: 'Text',
    variant: AppLinkVariantEnum.SECONDARY,
  },
};

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    variant: AppLinkVariantEnum.SECONDARY,
  },
};

SecondaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
