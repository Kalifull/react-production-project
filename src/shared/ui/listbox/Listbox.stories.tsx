import type { Meta, StoryObj } from '@storybook/react';

import Listbox from './Listbox';

import { ThemeEnum } from '../../api';

import { ThemeDecorator } from '../../config/storybook/theme-decorator';

const meta = {
  title: 'shared/Listbox',
  component: Listbox,
  argTypes: {},
  args: {
    defaultValue: 'Выберете значение',
    options: [
      { id: 1, optionValue: '1', content: 'Первый пункт', disabled: false },
      { id: 2, optionValue: '2', content: 'Второй пункт', disabled: false },
      { id: 3, optionValue: '3', content: 'Третий пункт', disabled: true },
    ],
    onChange: (value: string) => value,
  },
} satisfies Meta<typeof Listbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
