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
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback="loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
