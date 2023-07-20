export { fetchArticlesList } from './model/service/fetch-articles-list-data';
export { fetchNextArticlesPage } from './model/service/fetch-next-articles-page';
export { articlesPageActions, articlesPageReducer } from './model/slice/articles-page-slice';
export { default as ArticlesPage } from './ui/articles-page/LazyArticlesPage';
export type { ArticlesPageSchema } from './model/types/articles-page-schema.interface';
