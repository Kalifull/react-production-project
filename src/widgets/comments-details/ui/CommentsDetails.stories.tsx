import type { Meta, StoryObj } from '@storybook/react';

import { ThemeEnum } from '@/shared/api';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import CommentsDetails from './CommentsDetails';

const meta = {
  title: 'widgets/CommentsDetails',
  component: CommentsDetails,
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
              avatar: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
            },
          },
          '2': {
            id: '2',
            text: 'some comment 2',
            user: {
              id: 1,
              username: 'admin',
              password: 'admin',
              avatar: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
            },
          },
          '3': {
            id: '3',
            text: 'some comment 3',
            user: {
              id: 1,
              username: 'admin',
              password: 'admin',
              avatar: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
            },
          },
        },
        isLoading: false,
        error: null,
      },
    }),
  ],
} satisfies Meta<typeof CommentsDetails>;

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
