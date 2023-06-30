import { CountryEnum } from '../../../country/model/types/country-schema.interface';
import { CurrencyEnum } from '../../../currency/model/types/currency-schema.interface';

export interface Profile {
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: CurrencyEnum;
  country?: CountryEnum;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  profileData?: Profile | null;
  formData?: Profile | null;
  isLoading: boolean;
  error?: string | null;
  readOnly: boolean;
}

export interface PayloadReadOnly {
  readOnly: boolean;
}

export interface PayloadProfileForm {
  value: string | number;
  field: keyof Profile;
}
