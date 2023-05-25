import { FC } from 'react';

import { AppRouter } from '@/app/providers/app-router';
import { useTheme } from '@/app/providers/theme-provider';

import { Navbar } from '@/widgets/navbar';

import { cn } from '@/shared/lib';

import './styles/index.scss';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
