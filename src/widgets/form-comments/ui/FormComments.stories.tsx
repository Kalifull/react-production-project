import type { Meta, StoryObj } from '@storybook/react';

import { ThemeEnum } from '@/shared/api';

import Avatar from '@/shared/assets/test/storybook-avatar.png';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import FormComments from './FormComments';

const meta = {
  title: 'widgets/FormComments',
  component: FormComments,
  argTypes: {},
  decorators: [
    StoreDecorator({
      commentsInfo: {
        ids: ['1', '2', '3'],
        entities: {
          '1': {
            id: '1',
            text: 'some comment',
            user: {
              id: 1,
              username: 'admin',
              password: 'admin',
              avatar: Avatar,
            },
          },
          '2': {
            id: '2',
            text: 'some comment 2',
            user: {
              id: 1,
              username: 'admin',
              password: 'admin',
              avatar: Avatar,
            },
          },
          '3': {
            id: '3',
            text: 'some comment 3',
            user: {
              id: 1,
              username: 'admin',
              password: 'admin',
              avatar: Avatar,
            },
          },
        },
        isLoading: false,
        error: null,
      },
    }),
  ],
} satisfies Meta<typeof FormComments>;

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

export const Loading: Story = {
  args: {},
};

Loading.decorators = [StoreDecorator({ formCommentInfo: { text: '', isLoading: true } })];

export const Error: Story = {
  args: {},
};

Error.decorators = [
  StoreDecorator({
    formCommentInfo: { text: '', isLoading: false, error: 'Пожалуйста, введите комментарий!' },
  }),
];
