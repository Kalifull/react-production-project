import { render } from 'react-dom';

import App from '@/app';

import { StoreProvider } from '@/app/providers/store-provider';

import '@/app/styles/index.scss';

import '@/shared/config/i18n';

render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
