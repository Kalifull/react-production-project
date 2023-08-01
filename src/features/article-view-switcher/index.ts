export {
  articleViewActions,
  articleViewReducer,
  PAGE_LIMIT_TILE,
  PAGE_LIMIT_LIST,
} from './model/slice/article-view-switcher-slice';
export {
  selectArticleViewState,
  selectArticleView,
  selectArticleLimit,
  selectArticleIsInit,
} from './model/selectors/select-article-view-state';
export { default as ArticleViewSwitcher } from './ui/ArticleViewSwitcher';
export type { ArticleViewSchema } from './model/types/article-view-schema.interface';
