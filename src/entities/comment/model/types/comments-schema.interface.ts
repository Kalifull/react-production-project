import { EntityState } from '@reduxjs/toolkit';

import type { Comment } from './comment.interface';

export interface CommentsSchema extends EntityState<Comment> {
  isLoading: boolean;
  error?: string | null;
}

export type PayloadFetchCommentsError = string | undefined;
