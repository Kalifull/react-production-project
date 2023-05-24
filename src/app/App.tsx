import { FC } from 'react';
import { AppRouter } from '@/app/providers/app-router';
import { useTheme } from '@/app/providers/theme-provider';

import { Navbar } from '@/widgets/navbar';

import { cn } from '@/shared/lib';

import './styles/index.scss';

const App: FC = () => {
  const { theme, toggledTheme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggledTheme}>TOGGLE</button>
    </div>
  );
};

export default App;
