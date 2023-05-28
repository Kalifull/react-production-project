import { FC, Suspense } from 'react';

import { AppRouter } from '@/app/providers/app-router';
import { useTheme } from '@/app/providers/theme-provider';

import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

import { cn } from '@/shared/lib';

import './styles/index.scss';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="loading">
      <div className={cn('app', {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
