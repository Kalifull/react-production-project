import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyEnum } from '@/entities/currency';
import { CountryEnum } from '@/entities/country';

import { ThemeEnum } from '@/shared/api';

import Avatar from '@/shared/assets/test/storybook-avatar.png';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import EditableProfileCard from './EditableProfileCard';

const meta = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {},
  decorators: [
    StoreDecorator({
      profileInfo: {
        formData: {
          firstName: 'Алексей',
          lastName: 'Соловьев',
          age: 24,
          currency: CurrencyEnum.RUB,
          country: CountryEnum.Russia,
          city: 'Санкт-Петербург',
          username: 'Администратор',
          avatar: Avatar,
        },
        isLoading: false,
        error: null,
        readOnly: true,
        validationErrors: null,
      },
    }),
  ],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const ServerError: Story = {
  args: {},
};

ServerError.decorators = [
  StoreDecorator({
    profileInfo: {
      formData: null,
      isLoading: false,
      error: 'Ошибка при загрузке профиля',
      readOnly: true,
      validationErrors: null,
    },
  }),
];

export const Loading: Story = {
  args: {},
};

Loading.decorators = [
  StoreDecorator({
    profileInfo: {
      formData: null,
      isLoading: true,
      error: null,
      readOnly: true,
      validationErrors: null,
    },
  }),
];
