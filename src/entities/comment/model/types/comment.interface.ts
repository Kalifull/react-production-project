import type { User } from '../../../user';

export interface Comment {
  id: string;
  user: User;
  text: string;
}
