import type { Profile, ProfileErrorsEnum } from './profile.interface';

export interface ProfileSchema {
  profileData?: Profile | null;
  formData?: Profile | null;
  isLoading: boolean;
  error?: string | null;
  readOnly: boolean;
  validationErrors?: ProfileErrorsEnum[] | null;
}
