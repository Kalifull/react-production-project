import { Routing } from '@/pages';

import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

import { cn } from '@/shared/lib';

import { ErrorProvider, withProviders } from './providers';

const App = () => (
  <div className={cn('app')}>
    <Navbar />
    <main className={cn('content-page')}>
      <Sidebar />
      <ErrorProvider>
        <Routing />
      </ErrorProvider>
    </main>
  </div>
);

export default withProviders(App);
