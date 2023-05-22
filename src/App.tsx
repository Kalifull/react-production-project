import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from './theme/useTheme';
import { classNames as cn } from './helpers/classNames/classNames';

import MainPageAsync from './pages/MainPage/MainPageAsync';
import AboutPageAsync from './pages/AboutPage/AboutPageAsync';

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
          <Route path={'/'} element={<MainPageAsync />} />
          <Route path={'/about'} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
