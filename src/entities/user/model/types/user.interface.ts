import { UserRoleEnum } from '../constants/const-user';

export interface User {
  id: number;
  username: string;
  password: string;
  avatar?: string;
  roles?: UserRoleEnum[];
}
