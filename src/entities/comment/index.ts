export { sendCommentForArticle } from './model/service/send-comment-for-article';
export { fetchCommentsByArticleId } from './model/service/fetch-comments-by-article-id';
export { commentsActions, commentsReducer } from './model/slice/comment-slice';
export {
  selectCommentsState,
  selectCommentsInfo,
  selectCommentsIsLoading,
  selectCommentsError,
} from './model/selectors/select-comments-state';
export { default as CommentList } from './ui/comment-list/CommentList';
export type { Comment } from './model/types/comment.interface';
export type { CommentsSchema } from './model/types/comments-schema.interface';
