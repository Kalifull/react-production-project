import type { User } from './user.interface';

export interface UserSchema {
  authData?: User | null;
  isLoading: boolean;
  error?: string | null;
}

export type PayloadFetchUserError = string | undefined;
