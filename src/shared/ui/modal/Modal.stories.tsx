import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

import { ThemeEnum } from '../../api';

import { ThemeDecorator } from '../../config/storybook/theme-decorator';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {},
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci expedita dolore corporis ratione, nam quibusdam aspernatur sed reiciendis tenetur atque ullam. Abconsequuntur dolores nulla obcaecati voluptatem cumque facilis',
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
