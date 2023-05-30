import { FC } from 'react';

import { cn } from '@/shared/lib';

import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

import { Routing } from '@/pages';

import { useTheme } from './providers/theme-provider';
import { ErrorProvider, withProviders } from './providers';

import './styles/index.scss';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
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
