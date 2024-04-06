import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from '../service/fetch-comments-by-article-id';
import { sendCommentForArticle } from '../service/send-comment-for-article';

import type { Comment } from '../types/comment.interface';
import type { CommentsSchema, PayloadFetchCommentsError } from '../types/comments-schema.interface';

const initialState: CommentsSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: null,
};

export const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const commentsSlice = createSlice({
  name: 'comments-info',
  initialState: commentsAdapter.getInitialState<CommentsSchema>(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, { payload }: PayloadAction<Comment[]>) => {
          commentsAdapter.setAll(state, payload);
          state.isLoading = false;
        }
      )
      .addCase(
        fetchCommentsByArticleId.rejected,
        (state, { payload }: PayloadAction<PayloadFetchCommentsError>) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addCase(sendCommentForArticle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendCommentForArticle.fulfilled, (state, { payload }: PayloadAction<Comment>) => {
        commentsAdapter.upsertOne(state, payload);
        state.isLoading = false;
      })
      .addCase(
        sendCommentForArticle.rejected,
        (state, { payload }: PayloadAction<PayloadFetchCommentsError>) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { actions: commentsActions, reducer: commentsReducer } = commentsSlice;
