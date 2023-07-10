import { lazy } from 'react';

const LazyArticlesPage = lazy(() => import('./ArticlesPage'));

export default LazyArticlesPage;
