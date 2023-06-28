export interface User {
  id: number;
  username: string;
  password: string;
}

export interface UserSchema {
  authData?: User | null;
  isLoading: boolean;
  error?: string | null;
}
