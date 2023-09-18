import { lazy } from 'react';

const LazyForbiddenPage = lazy(() => import('./ForbiddenPage'));

export default LazyForbiddenPage;
