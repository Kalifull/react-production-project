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
