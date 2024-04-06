import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { sendCommentForArticle } from '@/entities/comment';

import type {
  FormCommentSchema,
  PayloadText,
  PayloadSendCommentError,
} from '../types/form-comment-schema.interface';

const initialState: FormCommentSchema = {
  text: '',
  isLoading: false,
  error: null,
};

export const formCommentSlice = createSlice({
  name: 'form-comment-info',
  initialState,
  reducers: {
    setText(state, { payload: { text } }: PayloadAction<PayloadText>) {
      state.text = text;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendCommentForArticle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendCommentForArticle.fulfilled, (state) => {
        state.text = '';
        state.isLoading = false;
      })
      .addCase(
        sendCommentForArticle.rejected,
        (state, { payload }: PayloadAction<PayloadSendCommentError>) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { actions: formCommentActions, reducer: formCommentReducer } = formCommentSlice;
