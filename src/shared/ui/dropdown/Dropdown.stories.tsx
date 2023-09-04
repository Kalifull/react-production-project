import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown';

import { ThemeEnum } from '../../api';
import { Avatar } from '..';
import AvatarIcon from '../../assets/test/storybook-avatar.png';

import { ThemeDecorator } from '../../config/storybook/theme-decorator';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {},
  args: {
    trigger: <Avatar src={AvatarIcon} />,
    items: [
      { id: 1, content: 'Первый пункт', disabled: false },
      { id: 2, content: 'Второй пункт', disabled: false },
      { id: 3, content: 'Третий пункт', disabled: false },
    ],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
