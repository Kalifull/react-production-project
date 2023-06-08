import { FC } from 'react';

import { cn } from '@/shared/lib';

import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

import { Routing } from '@/pages';

import { ErrorProvider, withProviders } from './providers';

const App: FC = () => {
  return (
    <div className={cn('app')}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <ErrorProvider>
          <Routing />
        </ErrorProvider>
      </div>
    </div>
  );
};

export default withProviders(App);
