export enum UserRoleEnum {
  ADMIN = 'admin',
  USER = 'user',
  MANAGER = 'manager',
}

export interface User {
  id: number;
  username: string;
  password: string;
  avatar?: string;
  roles?: UserRoleEnum[];
}
