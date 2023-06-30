import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  argTypes: {},
  args: {
    label: 'Example',
    options: [
      { optionValue: 'Example', content: 'Первый пункт' },
      { optionValue: 'Example', content: 'Второй пункт' },
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {},
};
