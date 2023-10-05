import type { Meta, StoryObj } from '@storybook/react';

import { ThemeEnum } from '@/shared/api';

import Avatar from '@/shared/assets/test/storybook-avatar.png';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import Navbar from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {},
  decorators: [
    StoreDecorator({ loginFormInfo: { username: '', password: '' } }),
    StoreDecorator({
      userInfo: {
        authData: null,
        error: null,
        isLoading: false,
        _persist: { version: -1, rehydrated: true },
      },
    }),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Auth: Story = {
  args: {},
};

Auth.decorators = [
  StoreDecorator({
    userInfo: {
      authData: { id: 1, username: 'admin', password: 'admin', avatar: Avatar },
      error: null,
      isLoading: false,
      _persist: { version: -2, rehydrated: true },
    },
  }),
];

Auth.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'У Вас новое уведомление',
          description: 'Произошло событие',
          userId: '1',
        },
        {
          id: '2',
          title: 'У Вас новое уведомление',
          description: 'Произошло событие',
          userId: '1',
          href: 'http://localhost:3000/admin',
        },
        {
          id: '3',
          title: 'У Вас новое уведомление',
          description: 'Произошло событие',
          userId: '2',
        },
        {
          id: '4',
          title: 'У Вас новое уведомление',
          description: 'Произошло событие',
          userId: '1',
        },
      ],
    },
  ],
};
