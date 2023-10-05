import { CountryEnum } from '../../../country/model/constants/const-country';
import { CurrencyEnum } from '../../../currency/model/constants/const-currency';

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
