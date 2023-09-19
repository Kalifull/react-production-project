import { UserRoleEnum } from '../const/const-user';

export interface User {
  id: number;
  username: string;
  password: string;
  avatar?: string;
  roles?: UserRoleEnum[];
}
