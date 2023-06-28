import { CountryEnum, CurrencyEnum } from '@/shared/constant';

export interface Profile {
  firstName: string;
  lastName: string;
  age: number;
  currency: CurrencyEnum;
  country: CountryEnum;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  profileData?: Profile | null;
  isLoading: boolean;
  error?: string | null;
  readonly: boolean;
}
