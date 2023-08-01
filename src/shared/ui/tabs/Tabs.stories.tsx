import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './Tabs';

import { ThemeEnum } from '../../api';

import { ThemeDecorator } from '../../config/storybook/theme-decorator';

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: { onClick: { action: 'onClick' } },
  args: {
    tabs: [
      { value: 'tab1', content: 'tab1' },
      { value: 'tab2', content: 'tab2' },
      { value: 'tab3', content: 'tab3' },
    ],
    type: 'tab2',
  },
} satisfies Meta<typeof Tabs>;

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
