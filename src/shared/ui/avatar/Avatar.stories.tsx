import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';

import AvatarIcon from '../../assets/icons/storybook-avatar.png';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {},
  args: {
    src: AvatarIcon,
    alt: 'shared/Avatar',
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 100,
  },
};

export const Middle: Story = {
  args: {
    size: 250,
  },
};

export const Big: Story = {
  args: {
    size: 500,
  },
};
