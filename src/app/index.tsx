import { FC } from 'react';

import { Routing } from '@/pages';

import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

import { cn } from '@/shared/lib';

import { ErrorProvider, withProviders } from './providers';

const App: FC = () => (
  <div className={cn('app')}>
    <Navbar />
    <div className={cn('content-page')}>
      <Sidebar />
      <ErrorProvider>
        <Routing />
      </ErrorProvider>
    </div>
  </div>
);

export default withProviders(App);
