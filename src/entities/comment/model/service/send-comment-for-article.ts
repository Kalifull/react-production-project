import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import { selectArticleData } from '@/entities/article';

import { selectAuthData } from '@/entities/user';

import type { Comment } from '@/entities/comment';

export const sendCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'comment/sendCommentForArticle',
  async (text, { rejectWithValue, extra, getState }) => {
    try {
      const authData = selectAuthData(getState());
      const article = selectArticleData(getState());

      if (!authData || !text || !article) {
        return rejectWithValue('noData');
      }

      const { data: comment } = await extra.api.post<Comment>('/comments', {
        text,
        userId: authData.id,
        articleId: article.id,
      });

      if (!comment) {
        throw new Error();
      }

      return { ...comment, user: authData };
    } catch (error) {
      return rejectWithValue('commentError');
    }
  }
);
