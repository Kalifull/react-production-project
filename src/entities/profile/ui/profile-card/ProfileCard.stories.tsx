import type { Meta, StoryObj } from '@storybook/react';

import { ThemeEnum } from '@/shared/api';

import Avatar from '@/shared/assets/test/storybook-avatar.png';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

import { CurrencyEnum } from '../../../currency/model/types/currency-schema.interface';
import { CountryEnum } from '../../../country/model/types/country-schema.interface';

import ProfileCard from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
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
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const ServerError: Story = {
  args: { error: 'Ошибка при загрузке профиля' },
};

export const Loading: Story = {
  args: { isLoading: true },
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
