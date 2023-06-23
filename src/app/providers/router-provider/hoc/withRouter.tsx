import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PageLoader } from '@/widgets/page-loader';

const withRouter = (component: () => ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>{component()}</Suspense>
    </BrowserRouter>
  );

export default withRouter;
