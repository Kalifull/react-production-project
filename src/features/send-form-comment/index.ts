export { formCommentActions, formCommentReducer } from './model/slice/form-comment-slice';
export {
  selectFormCommentState,
  selectFormCommentText,
  selectFormCommentIsLoading,
  selectFormCommentError,
} from './model/selectors/select-form-comment-state';
export { default as SendFormComment } from './ui/SendFormComment';
export type { FormCommentSchema } from './model/types/form-comment-schema.interface';
