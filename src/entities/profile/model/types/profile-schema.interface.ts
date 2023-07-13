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

export enum ProfileErrorsEnum {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_CITY = 'INCORRECT_CITY',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA',
}

export const validateErrorTranslation: Record<ProfileErrorsEnum, string> = {
  [ProfileErrorsEnum.INCORRECT_USER_DATA]: 'incorrectUserData',
  [ProfileErrorsEnum.INCORRECT_AGE]: 'incorrectAge',
  [ProfileErrorsEnum.INCORRECT_CITY]: 'incorrectCity',
  [ProfileErrorsEnum.INCORRECT_COUNTRY]: 'incorrectCountry',
  [ProfileErrorsEnum.SERVER_ERROR]: 'serverError',
  [ProfileErrorsEnum.NO_DATA]: 'noData',
};

export interface ProfileSchema {
  profileData?: Profile | null;
  formData?: Profile | null;
  isLoading: boolean;
  error?: string | null;
  readOnly: boolean;
  validationErrors?: ProfileErrorsEnum[] | null;
}

export interface PayloadReadOnly {
  readOnly: boolean;
}

export interface PayloadProfileForm {
  value: string | number;
  field: keyof Profile;
}

export type PayloadFetchProfileError = string | undefined;

export type PayloadSaveProfileErrors = ProfileErrorsEnum[] | undefined;
