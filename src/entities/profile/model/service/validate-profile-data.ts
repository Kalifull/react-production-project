import { Profile, ProfileErrorsEnum } from '../types/profile.interface';

export const validateProfileData = (profile?: Profile | null) => {
  const errors: ProfileErrorsEnum[] = [];

  if (!profile) {
    return [ProfileErrorsEnum.NO_DATA];
  }

  const { firstName, lastName, age, city, country } = profile;

  if (!firstName || !lastName) {
    errors.push(ProfileErrorsEnum.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ProfileErrorsEnum.INCORRECT_AGE);
  }

  if (!city) {
    errors.push(ProfileErrorsEnum.INCORRECT_CITY);
  }

  if (!country) {
    errors.push(ProfileErrorsEnum.INCORRECT_COUNTRY);
  }

  return errors;
};
