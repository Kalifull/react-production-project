import type { Meta, StoryObj } from '@storybook/react';

import { ThemeEnum } from '@/shared/api';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {},
  decorators: [StoreDecorator({ loginFormInfo: { username: 'User', password: 'Password' } })],
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Error: Story = {
  args: {},
};

Error.decorators = [
  StoreDecorator({
    loginFormInfo: { username: 'User', password: 'Password' },
    userInfo: { error: 'Неверный пароль' },
  }),
];

export const Loading: Story = {
  args: {},
};

Loading.decorators = [
  StoreDecorator({
    userInfo: { isLoading: true },
  }),
];
