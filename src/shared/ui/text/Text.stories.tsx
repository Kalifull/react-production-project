import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

import { ThemeEnum, TextVariantEnum } from '../../api';

import { ThemeDecorator } from '../../config/storybook/theme-decorator';

const meta = {
  title: 'shared/Text',
  component: Text,
  argTypes: {},
  args: {
    title: 'Title example',
    text: 'Text example',
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Error: Story = {
  args: {
    variant: TextVariantEnum.ERROR,
  },
};

export const Primary: Story = {
  args: {
    variant: TextVariantEnum.PRIMARY,
  },
};
