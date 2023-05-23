import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from '@/app/providers/ThemeProvider';

import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';

import { classNames as cn } from '@/shared/lib/classNames';

import './styles/index.scss';

const App: React.FC = () => {
  const { theme, toggledTheme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <button onClick={toggledTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О Сайте</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
