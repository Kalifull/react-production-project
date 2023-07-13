import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import type { Comment } from '../types/comment.interface';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>('comments/fetchCommentsByArticleId', async (articleId, { rejectWithValue, extra }) => {
  try {
    if (!articleId) {
      return rejectWithValue('commentsError');
    }

    const { data: comments } = await extra.api.get<Comment[]>(`/comments`, {
      params: {
        articleId,
        _expand: 'user',
      },
    });

    if (!comments) {
      throw new Error();
    }

    return comments;
  } catch (error) {
    return rejectWithValue('commentsError');
  }
});
