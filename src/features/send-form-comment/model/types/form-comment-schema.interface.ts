export interface FormCommentSchema {
  text: string;
  isLoading: boolean;
  error?: string | null;
}

export interface PayloadText {
  text: string;
}

export type PayloadSendCommentError = string | undefined;
