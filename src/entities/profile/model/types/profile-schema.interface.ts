import type { Profile, ProfileErrorsEnum } from './profile.interface';

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
