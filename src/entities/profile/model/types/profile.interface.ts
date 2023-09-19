import { CountryEnum } from '../../../country/model/types/country-schema.interface';
import { CurrencyEnum } from '../../../currency/model/types/currency-schema.interface';

export interface Profile {
  id?: number;
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: CurrencyEnum;
  country?: CountryEnum;
  city?: string;
  username?: string;
  avatar?: string;
}
