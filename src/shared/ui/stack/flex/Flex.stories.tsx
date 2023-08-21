import type { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';

import Text from '../../text/Text';

const meta = {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {},
  args: {
    children: (
      <>
        <Text text="first" />
        <Text text="second" />
        <Text text="third" />
        <Text text="fourth" />
      </>
    ),
    direction: 'row',
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {},
};

export const RowGap4: Story = {
  args: {
    gap: '4',
  },
};

export const RowGap8: Story = {
  args: {
    gap: '8',
  },
};

export const RowGap16: Story = {
  args: {
    gap: '16',
  },
};

export const RowGap32: Story = {
  args: {
    gap: '32',
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
  },
};

export const ColumnGap4: Story = {
  args: {
    direction: 'column',
    gap: '4',
  },
};

export const ColumnGap8: Story = {
  args: {
    direction: 'column',
    gap: '8',
  },
};

export const ColumnGap16: Story = {
  args: {
    direction: 'column',
    gap: '16',
  },
};

export const ColumnGap32: Story = {
  args: {
    direction: 'column',
    gap: '32',
  },
};
