export interface User {
  id: number;
  username: string;
  password: string;
  avatar?: string;
}

export interface UserSchema {
  authData?: User | null;
  isLoading: boolean;
  error?: string | null;
}

export type PayloadFetchUserError = string | undefined;
